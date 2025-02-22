pipeline {
    agent any

    environment {
    DOCKER_IMAGE = 'martinez42/connectocloud'
    DOCKER_TAG = 'latest'
  }

    stages {
        stage('Hello') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/issa2580/ConnecToCloud.git']])
            }
        }

        stage('Sonarqube analisys') {
          steps {
            script {
              nodejs(nodeJSInstallationName: 'nodejs') {
                withSonarQubeEnv('sonar') {
                  sh '''
                  npm install -g yarn
                  yarn add sonar-scanner
                  yarn sonar
                  '''
                }
              }
            }
          }
        }

        stage('Installation Dependancies') {
          steps {
            script {
              nodejs(nodeJSInstallationName: 'nodejs') {
                sh '''
                npm install -g yarn
                yarn install
                '''
              }
            }
          }
        }

        stage("Build and Push docker image"){
        steps {
          script {
            withDockerRegistry(credentialsId: 'docker-hub') {
            sh '''
              docker --version
              docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} -f Dockerfile .
              docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
            '''
            }
          }
        }
      }

        // stage('Dependancies Check') {
        //   steps {
        //       dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit --format HTML', odcInstallation: 'DP-Check'
        //       dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
        //   }
        // }
    }
}
