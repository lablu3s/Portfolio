## 🖥️**Sessão 6_Linux e Cibersegurança**
### **Desafio Prático Integrador — Mini-CTF Defensivo Linux**

### Objetivo: 
Tendo em conta o seguinte cenário: O servidor Ubuntu da empresa fictícia "Linux Agency" apresenta indícios de atividade suspeita e configurações severamente inseguras. Durante esta atividade o objetivo principal consiste em **Auditar, conter os danos, aplicar as correções e documentar toda a intervenção** — como se fosse chamado a responder a um incidente real. Utilizando o Ambiente Virtual TryHackMe — Linux Incident Surface (gratuito): https://tryhackme.com/room/linuxincidentsurface.

### Metodologia de Resposta (Roteiro de Ações Exigidas):

### Fase 1 — Identificação e Triagem

#### 1. Análise de Rede e Portas 

Identificar quais os portas e serviços ativos que estão expostos desnecessariamente.

#### Comando `ss -tuln` e `nmap -sV localhost`


#### 2. Auditoria de Contas

Procurar por utilizadores com permissões excessivas, contas sem palavra-passe associada ou chaves públicas suspeitas em authorized_keys.

#### Comando `sudo cat /etc/shadow | awk -F: '($2==""){print $1}'` e `cat ~/.ssh/authorized_keys`


### Fase 2 — Contenção

#### 1. Ativar a firewall UFW

Bloqueando todas as portas que não sejam estritamente necessárias para o negócio.

#### Comando `sudo ufw default deny incoming` ; `sudo ufw allow 22/tcp` e `sudo ufw enable`


### Fase 3 — Enrijecimento / Remediação


### Validação

Correr a ferramenta Lynis para atestar a melhoria da postura de segurança global do host.

#### Comando `sudo lynis audit system`





