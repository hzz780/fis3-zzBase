echo $1
buildWay=$1

# sh preBuild.sh

rm -rf ./build
fis3 release -d ./build $buildWay
