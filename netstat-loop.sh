#!/bin/bash
while true;
do
	netstat -an | grep -i LISTEN;
	sleep 2;
done