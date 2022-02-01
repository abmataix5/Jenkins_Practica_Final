
pipeline {
    agent any
    triggers { 
        pollSCM('0 */3 * * *') 
    }
      environment {
        LINT = ''
        TEST    = ''
    }
      parameters {
        text(name:'Nombre', defaultValue:'''Nombre''')
        text(name:'Motivo', defaultValue:'''Motivo ''')
        text(name:'Email', defaultValue:'''mataix.ab@gmail.com''')
    }
    stages {

        stage('Init'){
            steps{
                sh "npm ci && apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y"
                sh 'npm run build'
                sh 'npm start &'
            }

        }

        stage('Linter'){
            steps{
                script {
                    LINT = sh(script: "npm run lint",returnStatus:true)
                }
            }

        }

        stage('Test'){
            steps{
                script {
                    test = sh(script: "./node_modules/.bin/cypress run ",returnStatus:true)
                    echo "${test}"
                }
            }
        }


         stage('Update_readme') {
             steps {
                script{
                            sh """
                              #/bin/bash
                              node jenkinsScripts/readmeUpdate.js ${test} 
                              
                              """
               }
            
              }
       
         } 



        stage('Push_Changes') {
             steps {

                  withCredentials([string(credentialsId: 'jenkins_push', variable: 'TOKEN')]) {
                    script {
                        env.PUSH = sh(script:"./jenkinsScripts/Push_Changes.sh ${TOKEN} ${Nombre} '${Motivo}' ",returnStatus:true)
                    }
       
            }
        }
        }

       /*  stage('Vercel'){
              steps {
                script {
                    withCredentials([
                        string(credentialsId: 'vercel-org-id', variable: 'VERCELORGID'),
                        string(credentialsId: 'vercel-project-id', variable: 'VERCELPROJECTID'),
                        string(credentialsId: 'vercel-token', variable: 'VERCELTOKEN')
                    ]){
                        sh 'npm install -g npm@8.4.0 '
                        sh 'VERCEL_ORG_ID="$VERCELORGID" VERCEL_PROJECT_ID="$VERCELPROJECTID" vercel . --prod --scope abmataix5 --token="$VERCELTOKEN"'
                    }
                    
                }
            }

        } */

        stage('Enviar_notificacion') {
             steps {
                script{
                            sh """
                              #/bin/bash
                              node jenkinsScripts/email.js ${params.Email} ${LINT} ${test} ${PUSH}
                              
                              """
               }
            
        }
       
         } 
  

}
}

