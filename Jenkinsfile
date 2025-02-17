pipeline {
  agent any

    stages {
      stage('Hello') {
        steps {
            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/issa2580/ConnecToCloud.git']])
        }
      }
      stage('Build and test'){
        steps {
          scripts {
            nodejs(nodeJSInstallationName: 'nodejs'){
              sh '''
              npm run build
              npm run test
              '''
            }
          }
        }
      }
    }
}
