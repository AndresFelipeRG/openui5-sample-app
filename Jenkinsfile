pipeline {
  agent any
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/AndresFelipeRG/openui5-sample-app', branch: 'master')
      }
    }
    stage('npm') {
      steps {
        nodejs('nodev') {
          sh 'npm -v'
        }

        nodejs(configId: 'npm-config', nodeJSInstallationName: 'Node')
      }
    }
  }
}