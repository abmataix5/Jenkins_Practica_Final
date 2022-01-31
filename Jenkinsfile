
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
        text(name:'Nombre', defaultValue:'''Nombre de la persona''')
        text(name:'Motivo', defaultValue:'''Motivo de ejecución''')
        text(name:'Email', defaultValue:'''ejemplo@ejemplo.com''')
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
        stage('Update_Readme') {
             steps {
               script{
               env.RESULT_1 = sh """
                              #/bin/bash
                              node jenkinsScripts/readmeUpdate.js ${test} 
                              
                              """

                            sh('git config user.name abmataix5')
                            sh('git config user.email mataix.ab@gmail.com')
                            sh('git add .')
                            sh('git commit --allow-empty -m "Acutlizar readme"')
                            sh('git push')

               }
       
            }
        }
       
    }
  
}