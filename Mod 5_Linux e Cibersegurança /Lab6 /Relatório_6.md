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

#### Comando `sudo lynis audit system`


### Conclusão


<img width="807" height="430" alt="image" src="https://github.com/user-attachments/assets/304173a6-207a-4df4-bdb7-5660163cf9be" />
<img width="966" height="471" alt="image" src="https://github.com/user-attachments/assets/f68dc7bb-6d26-4f91-8cb8-687c051ab8be" />
<img width="959" height="396" alt="image" src="https://github.com/user-attachments/assets/9c85c40a-372e-4a3d-9e89-b0028fec5c2e" />
<img width="659" height="371" alt="image" src="https://github.com/user-attachments/assets/ef6f02a8-a627-4ecd-a313-71c4743b9189" />
<img width="668" height="539" alt="image" src="https://github.com/user-attachments/assets/8d51659f-ae3d-42ff-bd9b-2a8bbd5f6866" />
<img width="981" height="456" alt="image" src="https://github.com/user-attachments/assets/e9332e29-d9db-4151-9214-094e47abc243" />
<img width="568" height="226" alt="image" src="https://github.com/user-attachments/assets/cb2e6785-cfbb-45f8-848d-aa5ce7757ad3" />



<img width="677" height="373" alt="image" src="https://github.com/user-attachments/assets/ff1eb6c0-3247-4aea-8758-cd1d311733af" />
<img width="616" height="519" alt="image" src="https://github.com/user-attachments/assets/e142a6a4-0ee6-469c-a2f7-9a742b3e327d" />
<img width="659" height="333" alt="image" src="https://github.com/user-attachments/assets/aae32e89-790e-4c42-b2d9-2fd10a8c5efd" />
<img width="599" height="60" alt="image" src="https://github.com/user-attachments/assets/8cac0d8e-19b0-4642-8e89-b48ad4451696" />



<img width="836" height="140" alt="image" src="https://github.com/user-attachments/assets/daf36095-18eb-45f9-a5db-8bea9170ff7c" />
<img width="810" height="314" alt="image" src="https://github.com/user-attachments/assets/37f5b948-9397-454a-9aa5-6877e2b1059e" />
<img width="829" height="355" alt="image" src="https://github.com/user-attachments/assets/77131c29-9453-4197-b3e6-d6eadf7074c3" />
<img width="773" height="61" alt="image" src="https://github.com/user-attachments/assets/de0088ad-7e3a-4588-a17f-5505b0db9e04" />
<img width="968" height="385" alt="image" src="https://github.com/user-attachments/assets/28071864-d655-4038-904e-791027ed2660" />
<img width="647" height="232" alt="image" src="https://github.com/user-attachments/assets/512444ef-4ede-487a-9908-c6bfaaeb9c44" />
<img width="637" height="235" alt="image" src="https://github.com/user-attachments/assets/009abb5e-5df9-433a-bedb-6d9513096681" />

```
root@tryhackme:/home/ubuntu# sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW IN    Anywhere                  
22/tcp (v6)                ALLOW IN    Anywhere (v6)             

root@tryhackme:/home/ubuntu# 

```
<img width="767" height="84" alt="image" src="https://github.com/user-attachments/assets/245717f6-d3bd-4ce0-afde-12277839eee6" />
<img width="971" height="505" alt="image" src="https://github.com/user-attachments/assets/27a13eda-5020-43c7-be63-25f9716d41e0" />

```
GNU nano 4.8                              /etc/ssh/sshd_config                               Modified  
#       $OpenBSD: sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/bin:/bin:/usr/sbin:/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Include /etc/ssh/sshd_config.d/*.conf

Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m
PermitRootLogin no
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

PubkeyAuthentication yes

# Expect .ssh/authorized_keys2 to be disregarded by default in future.
#AuthorizedKeysFile     .ssh/authorized_keys .ssh/authorized_keys2

#AuthorizedPrincipalsFile none

#AuthorizedKeysCommand none
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

<img width="716" height="121" alt="image" src="https://github.com/user-attachments/assets/74bcf9f8-c675-400f-9631-d3ab1cc5e97d" />
<img width="965" height="500" alt="image" src="https://github.com/user-attachments/assets/a1f4bb91-a828-489b-ac39-dc8d64939e3c" />
<img width="597" height="40" alt="image" src="https://github.com/user-attachments/assets/1d848c86-c9a2-4592-b26f-0158d6408b94" />
<img width="779" height="418" alt="image" src="https://github.com/user-attachments/assets/f1ea45a5-30b8-4af8-b620-1b872044743b" />
<img width="956" height="209" alt="image" src="https://github.com/user-attachments/assets/a2a0963a-bf16-48ad-ab77-964cf163b021" />


## 🖥️**Sessão 6_Linux e Cibersegurança**
### **Desafio Prático Integrador — Mini-CTF Defensivo Linux**

### Objetivo: 
Tendo em conta o seguinte cenário: O servidor Ubuntu da empresa fictícia "Linux Agency" apresenta indícios de atividade suspeita e configurações severamente inseguras. Durante esta atividade o objetivo principal consiste em **Auditar, conter os danos, aplicar as correções e documentar toda a intervenção** — como se fosse chamado a responder a um incidente real. Utilizando o Ambiente Virtual TryHackMe — Linux Incident Surface (gratuito): https://tryhackme.com/room/linuxincidentsurface.

### Metodologia de Resposta (Roteiro de Ações Exigidas):

### Fase 1 — Identificação e Triagem

Nesta etapa, o objetivo é mapear a superfície de ataque inicial, identificando quais serviços e portas estão abertos e expostos, e auditando as contas do sistema.

#### 1. Análise de Rede e Portas 

Começamos esta análise ao identificar quais as portas e serviços ativos que estão expostos desnecessariamente.

#### Comando `ip a`

Com este comando é feita uma **Identificação dos endereços IP** do host (10.129.189.205 na interface eth0).

<img width="908" height="310" alt="image" src="https://github.com/user-attachments/assets/c7a0784a-3321-4df9-bb2a-8298ddae196f" />

#### Comando `ss -tuln`

Este comando faz uma **Listagem de portas TCP/UDP** em modo escuta.

<img width="978" height="338" alt="image" src="https://github.com/user-attachments/assets/daa04ea8-8bd0-402b-89f7-c2c4f1030477" />
 
#### Comando `nmap -sV localhost`

O nmap -sV realiza varredura de versão, revelando os softwares exatos em execução para determinar se há serviços obsoletos ou desnecessários.

<img width="997" height="536" alt="image" src="https://github.com/user-attachments/assets/1765edf2-a4d3-4fa4-a197-5fd727372e7f" />
<img width="756" height="168" alt="image" src="https://github.com/user-attachments/assets/167119b7-bb90-4e7f-a591-12057a16e688" />

**OBS:** O nmap não veio instalado na VM e as tentativas de instalação falharam (provavelmente por falta de atualização do repositório ou isolamento da rede no ambiente do TryHackMe).

#### Comando `sudo ss -tulpn`

Se a máquina não tiver acesso externo à internet, pode-se contornar a ausência do nmap utilizando a flag -p do próprio ss (sudo ss -tulpn) para descobrir o nome e o PID do processo associado a cada porta diretamente no kernel.

<img width="995" height="524" alt="image" src="https://github.com/user-attachments/assets/d02bdb72-2225-4ce9-bbf5-7c3280eb9ddc" />

#### 2. Auditoria de Contas

Ao realizar esta auditoria o foco é procurar por utilizadores com permissões excessivas, contas sem palavra-passe associada ou chaves públicas suspeitas em authorized_keys.

#### Comando `sudo cat /etc/shadow | awk -F: '($2==""){print $1}'`

Comando para verificar se existem contas ativas sem palavra-passe configurada no /etc/shadow.

<img width="740" height="62" alt="image" src="https://github.com/user-attachments/assets/8da863b0-f9a9-40da-b714-31d0a3122c84" />

**OBS:** O retorno foi vazio, o que significa que não existem utilizadores no sistema com palavra-passe em branco.

#### Comando `cat ~/.ssh/authorized_keys`

Comando para inspecionar chaves SSH autorizadas para o utilizador atual. Exibe quais chaves públicas têm autorização para efetuar login SSH sem senha. Se encontrar chaves desconhecidas ou não autorizadas, elas devem ser removidas imediatamente.

<img width="989" height="358" alt="image" src="https://github.com/user-attachments/assets/cf74410c-2315-4a0e-9c3f-0ef936c060e4" />

### Fase 2 — Contenção

O objetivo aqui é restringir o tráfego de rede, aplicando a regra do menor privilégio através da firewall ufw (Uncomplicated Firewall).

#### 1. Ativar a firewall UFW

Bloqueando todas as portas que não sejam estritamente necessárias para o negócio.

#### Comando `sudo ufw default deny incoming` ; `sudo ufw allow 22/tcp` e `sudo ufw enable`

Estes comandos tem as seguintes funcionalidades:

O `sudo ufw default deny incoming` Bloqueia por padrão todo o tráfego de entrada.

O `sudo ufw allow 22/tcp` Permite explicitamente o tráfego de entrada na porta 22 para não perder a conexão remota SSH.

O `sudo ufw enable` Ativa a firewall e garante que ela seja iniciada com o sistema.

<img width="787" height="211" alt="image" src="https://github.com/user-attachments/assets/6a5ea8dd-eb3a-45c1-bf32-ed687fd691f7" />

#### Comando `sudo ufw status verbose`

Este comando apresenta a lista das regras ativas no sistema.

<img width="829" height="227" alt="image" src="https://github.com/user-attachments/assets/ab3e64ed-11cc-4395-b3ff-291572196c52" />

#### Bash:

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

Consiste em endurecer a segurança do sistema (hardening), desativando recursos inseguros e aplicando correções.

#### 1. Corrigir a configuração do SSH de acordo com as boas práticas (desativar login root, bloquear passwords, migrar para chaves criptográficas)

#### Comando `sudo nano /etc/ssh/sshd_config`

Através deste comando é aberto o editor de texto nano com privilégios de administrador (sudo) para alterar o arquivo principal de configurações do servidor SSH (sshd_config).

<img width="497" height="56" alt="image" src="https://github.com/user-attachments/assets/ca5ca62e-152c-4ffa-ba69-200cd4f8442c" />

Neste editor de texto o objetivo é ... modificando os seguintes parâmetros:

**PermitRootLogin no:** Impede login direto como superutilizador root.

**PasswordAuthentication no:** Desativa o login por senha, forçando o uso exclusivo de chaves criptográficas (**PubkeyAuthentication yes**).

#### Bash: 

```
#       $OpenBSD: sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/bin:/bin:/usr/sbin:/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Include /etc/ssh/sshd_config.d/*.conf

Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

#HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# Logging
#SyslogFacility AUTH
#LogLevel INFO

# Authentication:

#LoginGraceTime 2m
PermitRootLogin no
#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

PubkeyAuthentication yes

# Expect .ssh/authorized_keys2 to be disregarded by default in future.
#AuthorizedKeysFile     .ssh/authorized_keys .ssh/authorized_keys2

#AuthorizedPrincipalsFile none
#AuthorizedKeysCommand none
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

#### Comandos `sudo sshd -t` `sudo systemctl restart sshd` `sudo systemctl status sshd`

Aqui o objetivo destes comandos é testar a sintaxe do /etc/ssh/sshd_config antes de reiniciar o serviço, depois é executar o reinicio do serviço para guardar as modificações realizadas e por fim verificar o estado deste serviço.

<img width="998" height="474" alt="image" src="https://github.com/user-attachments/assets/e179aded-c32a-4b57-8253-d0d20bdd8edf" />

#### Comandos `sudo chmod 700 ~/.ssh` `sudo chmod 600 ~/.ssh/authorized_keys`

Aqui fazemos o ajuste correto das permissões estritas de ficheiros de chave SSH para que apenas o dono leia/escreva.

<img width="925" height="77" alt="image" src="https://github.com/user-attachments/assets/1d6ff326-a9a3-4aaa-81fb-a213f4a7b315" />

#### Comando `ssh-keygen -t ed25519`

<img width="900" height="405" alt="image" src="https://github.com/user-attachments/assets/cb6b0281-22f0-4189-be96-aa45c97e75c7" />

#### Comandos `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys` `cat ~/.ssh/authorized_keys`

<img width="987" height="365" alt="image" src="https://github.com/user-attachments/assets/b3bb83ac-fde3-4147-96d4-a80ae21ffbf4" />

#### 2. Aplicar patches de segurança relevantes identificados durante a triagem

<img width="789" height="73" alt="image" src="https://github.com/user-attachments/assets/5f05eed5-008e-4956-90c2-a6e867e7eb7b" />
<img width="997" height="185" alt="image" src="https://github.com/user-attachments/assets/1baa32b1-4bd5-4b03-8c8d-70c39bd19bc1" />
<img width="987" height="229" alt="image" src="https://github.com/user-attachments/assets/837525c3-8b75-49d8-8cec-7a4015b0afe5" />

### Validação

Correr a ferramenta Lynis para atestar a melhoria da postura de segurança global do host.

#### Comando `sudo lynis audit system`
<img width="997" height="471" alt="image" src="https://github.com/user-attachments/assets/831fc37f-faa9-4c85-87e7-e11e614dc167" />
<img width="638" height="93" alt="image" src="https://github.com/user-attachments/assets/1f2ce216-603b-4da7-8350-0ca97e44de6b" />



### Conclusão



