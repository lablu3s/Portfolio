## 🖥️**Sessão 3_Linux e Cibersegurança**
### **Hardening de Redes Linux e Configuração de Firewalls**

### Objetivo: 
Durante esta atividade o objetivo principal consiste na **Configuração de uma política defensiva estrita** para impedir acessos não autorizados
a serviços críticos do servidor, combinando UFW e iptables. Utilizando o Ambiente Virtual TryHackMe — Network Security Essentials (gratuito): https://tryhackme.com/
room/networksecurityessentials

### Tarefas:

1. Comando 'sudo ufw status' 
<img width="597" height="209" alt="image" src="https://github.com/user-attachments/assets/c1398d63-9808-4fc8-805e-aa59723ea13b" />

2. Comando 'sudo ufw default deny incoming' e 'sudo ufw default allow outgoing'
<img width="578" height="167" alt="image" src="https://github.com/user-attachments/assets/39e130ef-712a-4f92-bd51-15b033c0ba1d" />

3. Comando 'sudo ufw allow 22/tcp'
<img width="579" height="159" alt="image" src="https://github.com/user-attachments/assets/ee76c2f3-d0fc-4494-91b2-a5e501ca72ca" />

4. Comando 'sudo iptables -A INPUT -s 203.0.113.50 -j DROP'
<img width="677" height="121" alt="image" src="https://github.com/user-attachments/assets/1a6a09e0-4602-44c2-a459-a539edb08d27" />

5. Comando 'sudo iptables-save | sudo tee /etc/iptables/rules.v4'
<img width="696" height="576" alt="image" src="https://github.com/user-attachments/assets/243b8929-29e9-415d-9f37-c1e14f7cc5c1" />

6. Comando 'sudo ufw status verbose'
<img width="602" height="275" alt="image" src="https://github.com/user-attachments/assets/4a4352a4-e78c-4ffb-a566-80f0429931ad" />

7. Comando 'sudo iptables -L -v'
<img width="777" height="532" alt="image" src="https://github.com/user-attachments/assets/e4d10252-d4e3-4fa7-8415-044c8569d51f" />
<img width="968" height="529" alt="image" src="https://github.com/user-attachments/assets/9e19fed1-c999-49b7-bb0a-f5ab4e72f1d6" />
<img width="952" height="519" alt="image" src="https://github.com/user-attachments/assets/cf680ced-3b59-4686-bc11-c7e8864b40d2" />
<img width="970" height="474" alt="image" src="https://github.com/user-attachments/assets/fcd1bf25-ad21-479f-b63b-4e92cba6e351" />
<img width="970" height="474" alt="image" src="https://github.com/user-attachments/assets/3c72470e-ec85-4397-adf1-6ad5957bb07a" />
<img width="970" height="485" alt="image" src="https://github.com/user-attachments/assets/fc26cf86-5f5f-449d-8620-17cfb180811f" />
<img width="937" height="279" alt="image" src="https://github.com/user-attachments/assets/b80ece24-550c-46f4-bc9d-cd6f2a541f60" />

8. Explicação das políticas aplicadas

   



