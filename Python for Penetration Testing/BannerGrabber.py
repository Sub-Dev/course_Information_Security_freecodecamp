#! /usr/bin/python3
import socket

def banner(ip, port):
    try:
        socket.setdefaulttimeout(2)
        s = socket.socket()
        s.connect((ip, port))
        s.settimeout(5)
        banner_data = s.recv(1024)
        print("Banner:", str(banner_data).strip('b'))
        s.close()
    except Exception as e:
        print(f"Erro ao conectar: {e}")


def main():
    ip = input("Enter the IP address: ")
    port = int(input("Enter the port: "))
    banner(ip, port)

if __name__ == "__main__":
    main()
