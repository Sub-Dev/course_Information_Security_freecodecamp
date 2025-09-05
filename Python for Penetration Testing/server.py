import socket

serversock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = socket.gethostname()
port = 444

serversock.bind((host, port))

serversock.listen(3)

while True:
  clientsocket, address = serversock.accept()

  print(f"Connection from {address} has been established.")
  message = "Thank you for connecting to the server" + "\r\n"
  clientsocket.send(message.encode('ascii'))
  clientsocket.close()