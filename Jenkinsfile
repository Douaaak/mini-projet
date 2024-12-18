pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'douaaakkari/mini-projet'  
    }

    stages {
        stage('clone') {
            steps {
                git 'https://github.com/Douaaak/mini-projet.git'
            }
        }
        stage('build') {
            steps {
                script {
                  docker.build("${DOCKER_IMAGE}:ver1")
                }
            }
        }

        stage('push') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'DockerHubLogin') {
                        docker.image("${DOCKER_IMAGE}:ver1").push()
                    }
                }
            }
        }
    stage('deploy') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'DockerHubLogin') {
                        def docker_image = docker.image("${DOCKER_IMAGE}:ver1")
                        docker_image.run('--name mini-projet -p 8000:8000')
                    }
                }
            }
        }
    }

}