#! /usr/bin/python3
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = input("Enter the host to scan: ")
port = int(input("Enter the port to scan: "))

def portScanner(port):
  if s.connect_ex((host, port)):
    print("Port %d is closed" % (port))
  else:
      print("Port %d is open" % (port))

portScanner(port)