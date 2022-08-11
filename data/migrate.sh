#!/bin/bash
params=("$@")

username=$1

password=$2

database=$3


for (( c=3; c <= ${#params}; c++ ))
do
	mysql -u$username -p$password $database < ${params[$c]}
done