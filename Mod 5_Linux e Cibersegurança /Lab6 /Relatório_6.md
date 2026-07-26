## 🖥️**Sessão 6_Linux e Cibersegurança**
### **Desafio Prático Integrador — Mini-CTF Defensivo Linux**

### Objetivo: 
Tendo em conta o seguinte cenário: O servidor Ubuntu da empresa fictícia "Linux Agency" apresenta indícios de atividade suspeita e configurações severamente inseguras. Durante esta atividade o objetivo principal consiste em **Auditar, conter os danos, aplicar as correções e documentar toda a intervenção** — como se fosse chamado a responder a um incidente real. Utilizando o Ambiente Virtual TryHackMe — Linux Incident Surface (gratuito): https://tryhackme.com/room/linuxincidentsurface.

### Metodologia de Resposta (Roteiro de Ações Exigidas):

### Fase 1 — Identificação e Triagem

#### 1. Análise de Rede e Portas 

Identificar quais os portas e serviços ativos que estão expostos desnecessariamente.

#### Comando `ss -tuln` e `nmap -sV localhost`

<img width="819" height="339" alt="image" src="https://github.com/user-attachments/assets/ada678f6-af8b-4074-864c-43c84e44a54a" />
<img width="738" height="344" alt="image" src="https://github.com/user-attachments/assets/2c6eb774-414e-412c-b167-5c014136a2b8" />

<img width="982" height="371" alt="image" src="https://github.com/user-attachments/assets/66ad6016-3efd-4b31-92e1-a1e24d22c5a8" />

#### 2. Auditoria de Contas

Procurar por utilizadores com permissões excessivas, contas sem palavra-passe associada ou chaves públicas suspeitas em authorized_keys.

#### Comando `sudo cat /etc/shadow | awk -F: '($2==""){print $1}'` e `cat ~/.ssh/authorized_keys`
<img width="662" height="75" alt="image" src="https://github.com/user-attachments/assets/4515f70b-7a44-46f2-8b90-7c90bb4fcf1b" />
<img width="864" height="424" alt="image" src="https://github.com/user-attachments/assets/400aadf1-6b9e-4f83-aeb6-bfb5be4ee574" />

<img width="993" height="506" alt="image" src="https://github.com/user-attachments/assets/dd4b94b3-ddc9-403e-91ca-5a23c0ee97af" />

### Fase 2 — Contenção

#### 1. Ativar a firewall UFW

Bloqueando todas as portas que não sejam estritamente necessárias para o negócio.

#### Comando `sudo ufw default deny incoming` ; `sudo ufw allow 22/tcp` e `sudo ufw enable`
<img width="619" height="170" alt="image" src="https://github.com/user-attachments/assets/2995ae5f-e5de-4957-b054-b4802055fb88" />
<img width="603" height="224" alt="image" src="https://github.com/user-attachments/assets/b261fdf6-d2d6-49b2-8d93-c53161917b3c" />

```
ubuntu@tryhackme:~$ sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW IN    Anywhere                  
22/tcp (v6)                ALLOW IN    Anywhere (v6)             

ubuntu@tryhackme:~$
```


### Fase 3 — Enrijecimento / Remediação

Corrigir a configuração do SSH de acordo com as boas práticas (desativar login root, bloquear passwords, migrar para chaves criptográficas)

<img width="497" height="56" alt="image" src="https://github.com/user-attachments/assets/ca5ca62e-152c-4ffa-ba69-200cd4f8442c" />


```
 GNU nano 4.8                          /etc/ssh/sshd_config                           Modified  
#       $OpenBSD: sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/bin:/bin:/usr/sbin:/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Include /etc/ssh/sshd_config.d/*.conf

#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

 GNU nano 4.8                          /etc/ssh/sshd_config                           Modified  
#       $OpenBSD: sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/bin:/bin:/usr/sbin:/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Include /etc/ssh/sshd_config.d/*.conf

#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none
#AuthorizedKeysCommandUser nobody

# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
PasswordAuthentication no
#PermitEmptyPasswords no

# Change to yes to enable challenge-response passwords (beware issues with
# some PAM modules and threads)
ChallengeResponseAuthentication no

# Kerberos options
#KerberosAuthentication no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
#KerberosGetAFSToken no

# GSSAPI options
#GSSAPIAuthentication no
#GSSAPICleanupCredentials yes
#GSSAPIStrictAcceptorCheck yes
#GSSAPIKeyExchange no

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PasswordAuthentication.  Depending on your PAM configuration,
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# PAM authentication, then enable this but set PasswordAuthentication
# and ChallengeResponseAuthentication to 'no'.
UsePAM yes

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
X11Forwarding yes
#X11DisplayOffset 10
#X11UseLocalhost yes
#PermitTTY yes
PrintMotd no
#PrintLastLog yes
#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#UseDNS no
#PidFile /var/run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# Allow client to pass locale environment variables
AcceptEnv LANG LC_*

# override default of no subsystems
Subsystem       sftp    /usr/lib/openssh/sftp-server

# Example of overriding settings on a per-user basis
#Match User anoncvs
#       X11Forwarding no
#       AllowTcpForwarding no
#       PermitTTY no
#       ForceCommand cvs server

```
<img width="878" height="443" alt="image" src="https://github.com/user-attachments/assets/5b94bdb1-1f2f-430e-a9a0-30b43e9daa6a" />

<img width="669" height="71" alt="image" src="https://github.com/user-attachments/assets/991dae66-630f-4a1f-bba3-496d640c18a1" />
<img width="772" height="404" alt="image" src="https://github.com/user-attachments/assets/fadea09c-be38-4c19-ad73-dc4118769edf" />
<img width="883" height="117" alt="image" src="https://github.com/user-attachments/assets/8d25ea0a-00a5-4956-8a45-aca1168e1055" />
<img width="602" height="144" alt="image" src="https://github.com/user-attachments/assets/7fa8e86a-d027-4a5e-9fc7-871d004f2f44" />

Aplicar patches de segurança relevantes identificados durante a triagem.

### Validação

Correr a ferramenta Lynis para atestar a melhoria da postura de segurança global do host.


### Conclusão



#### Comando `sudo lynis audit system`





