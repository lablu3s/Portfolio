## 🖥️**Sessão 5_Linux e Cibersegurança**
### **Análise de Vulnerabilidades em Linux e Ferramentas de Auditoria**

### Objetivo: 
Durante esta atividade o objetivo principal consiste na **Execução de um exame de auditoria técnica automatizada** para identificar desvios de
conformidade em relação aos standards de segurança recomendados (CIS Benchmarks). Utilizando o Ambiente Virtual KillerCoda Ubuntu Playground: https://killercoda.com/playgrounds/scenario/ubuntu ou o Ambiente Virtual TryHackMe — Linux Process Analysis (gratuito): https://tryhackme.com/room/linuxprocessanalysis. Para este laboratório foi utilizado o KillerCoda Ubuntu Playground.

### Tarefas:

### 1. Atualizar a árvore de pacotes e instalar o Lynis

#### Comando `sudo apt update && sudo apt install lynis -y`


<img width="797" height="625" alt="image" src="https://github.com/user-attachments/assets/ec3425ab-c0e5-4ba9-a549-de33bc3d2e52" />
<img width="897" height="571" alt="image" src="https://github.com/user-attachments/assets/f70ad91a-bc91-4f0d-8509-cb5a20e0ab52" />
<img width="610" height="391" alt="image" src="https://github.com/user-attachments/assets/ea0821c2-aa03-480b-a19e-55907f706ffe" />
<img width="621" height="169" alt="image" src="https://github.com/user-attachments/assets/d52179f5-a99c-4c96-bc46-d23de727abb5" />
 

```
Suggestions (50):
  ----------------------------
  * This release is more than 4 months old. Check the website or GitHub to see if there is an update available. [LYNIS] 
      https://cisofy.com/lynis/controls/LYNIS/

  * Install libpam-tmpdir to set $TMP and $TMPDIR for PAM sessions [DEB-0280] 
      https://cisofy.com/lynis/controls/DEB-0280/

  * Install apt-listbugs to display a list of critical bugs prior to each APT installation. [DEB-0810] 
      https://cisofy.com/lynis/controls/DEB-0810/

  * Install apt-listchanges to display any significant changes prior to any upgrade via APT. [DEB-0811] 
      https://cisofy.com/lynis/controls/DEB-0811/

  * Install fail2ban to automatically ban hosts that commit multiple authentication errors. [DEB-0880] 
      https://cisofy.com/lynis/controls/DEB-0880/

  * Set a password on GRUB boot loader to prevent altering boot configuration (e.g. boot in single user mode without password) [BOOT-5122] 
      https://cisofy.com/lynis/controls/BOOT-5122/

  * Consider hardening system services [BOOT-5264] 
    - Details  : Run '/usr/bin/systemd-analyze security SERVICE' for each service
      https://cisofy.com/lynis/controls/BOOT-5264/

  * If not required, consider explicit disabling of core dump in /etc/security/limits.conf file [KRNL-5820] 
      https://cisofy.com/lynis/controls/KRNL-5820/

  * Configure password hashing rounds in /etc/login.defs [AUTH-9230] 
      https://cisofy.com/lynis/controls/AUTH-9230/

  * Install a PAM module for password strength testing like pam_cracklib or pam_passwdqc [AUTH-9262] 
      https://cisofy.com/lynis/controls/AUTH-9262/

  * When possible set expire dates for all password protected accounts [AUTH-9282] 
      https://cisofy.com/lynis/controls/AUTH-9282/

  * Configure minimum password age in /etc/login.defs [AUTH-9286] 
      https://cisofy.com/lynis/controls/AUTH-9286/

  * Configure maximum password age in /etc/login.defs [AUTH-9286] 
      https://cisofy.com/lynis/controls/AUTH-9286/

  * Default umask in /etc/login.defs could be more strict like 027 [AUTH-9328] 
      https://cisofy.com/lynis/controls/AUTH-9328/

  * To decrease the impact of a full /home file system, place /home on a separate partition [FILE-6310] 
      https://cisofy.com/lynis/controls/FILE-6310/

  * To decrease the impact of a full /tmp file system, place /tmp on a separate partition [FILE-6310] 
      https://cisofy.com/lynis/controls/FILE-6310/

  * To decrease the impact of a full /var file system, place /var on a separate partition [FILE-6310] 
      https://cisofy.com/lynis/controls/FILE-6310/

  * vm.swappiness set to: 0. Consider setting value to minimum of 1 for minimizing swappiness, but not quite disabling it. Will prevent OOM killer from killing processes when running out of physical memory. [FILE-6394] 
      https://cisofy.com/lynis/controls/FILE-6394/

  * Disable drivers like USB storage when not used, to prevent unauthorized storage or data theft [USB-1000] 
      https://cisofy.com/lynis/controls/USB-1000/

  * Check DNS configuration for the dns domain name [NAME-4028] 
      https://cisofy.com/lynis/controls/NAME-4028/

  * Purge old/removed packages (1 found) with aptitude purge or dpkg --purge command. This will cleanup old configuration files, cron jobs and startup scripts. [PKGS-7346] 
      https://cisofy.com/lynis/controls/PKGS-7346/

  * Install debsums utility for the verification of packages with known good database. [PKGS-7370] 
      https://cisofy.com/lynis/controls/PKGS-7370/

  * Update your system with apt-get update, apt-get upgrade, apt-get dist-upgrade and/or unattended-upgrades [PKGS-7392] 
      https://cisofy.com/lynis/controls/PKGS-7392/

  * Install package apt-show-versions for patch management purposes [PKGS-7394] 
      https://cisofy.com/lynis/controls/PKGS-7394/

  * Determine if protocol 'dccp' is really needed on this system [NETW-3200] 
      https://cisofy.com/lynis/controls/NETW-3200/

  * Determine if protocol 'sctp' is really needed on this system [NETW-3200] 
      https://cisofy.com/lynis/controls/NETW-3200/

  * Determine if protocol 'rds' is really needed on this system [NETW-3200] 
      https://cisofy.com/lynis/controls/NETW-3200/

  * Determine if protocol 'tipc' is really needed on this system [NETW-3200] 
      https://cisofy.com/lynis/controls/NETW-3200/

  * Check iptables rules to see which rules are currently not used [FIRE-4513] 
      https://cisofy.com/lynis/controls/FIRE-4513/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : AllowTcpForwarding (set YES to NO)
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : ClientAliveCountMax (set 3 to 2)
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : LogLevel (set INFO to VERBOSE)
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : MaxAuthTries (set 6 to 3)
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : MaxSessions (set 10 to 2)
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : PermitRootLogin (set YES to (FORCED-COMMANDS-ONLY|NO|PROHIBIT-PASSWORD|WITHOUT-PASSWORD))
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : Port (set 22 to )
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : TCPKeepAlive (set YES to NO)
      https://cisofy.com/lynis/controls/SSH-7408/

  * Consider hardening SSH configuration [SSH-7408] 
    - Details  : AllowAgentForwarding (set YES to NO)
      https://cisofy.com/lynis/controls/SSH-7408/

  * Enable logging to an external logging host for archiving purposes and additional protection [LOGG-2154] 
      https://cisofy.com/lynis/controls/LOGG-2154/

  * Add a legal banner to /etc/issue, to warn unauthorized users [BANN-7126] 
      https://cisofy.com/lynis/controls/BANN-7126/

  * Add legal banner to /etc/issue.net, to warn unauthorized users [BANN-7130] 
      https://cisofy.com/lynis/controls/BANN-7130/

  * Enable process accounting [ACCT-9622] 
      https://cisofy.com/lynis/controls/ACCT-9622/

  * Enable sysstat to collect accounting (disabled) [ACCT-9626] 
      https://cisofy.com/lynis/controls/ACCT-9626/

  * Enable auditd to collect audit information [ACCT-9628] 
      https://cisofy.com/lynis/controls/ACCT-9628/

  * Install a file integrity tool to monitor changes to critical and sensitive files [FINT-4350] 
      https://cisofy.com/lynis/controls/FINT-4350/

  * Determine if automation tools are present for system management [TOOL-5002] 
      https://cisofy.com/lynis/controls/TOOL-5002/

  * Consider restricting file permissions [FILE-7524] 
    - Details  : See screen output or log file
    - Solution : Use chmod to change file permissions
      https://cisofy.com/lynis/controls/FILE-7524/

  * One or more sysctl values differ from the scan profile and could be tweaked [KRNL-6000] 
    - Solution : Change sysctl value or disable test (skip-test=KRNL-6000:<sysctl-key>)
      https://cisofy.com/lynis/controls/KRNL-6000/

  * Harden compilers like restricting access to root user only [HRDN-7222] 
      https://cisofy.com/lynis/controls/HRDN-7222/

  * Harden the system by installing at least one malware scanner, to perform periodic file system scans [HRDN-7230] 
    - Solution : Install a tool like rkhunter, chkrootkit, OSSEC
      https://cisofy.com/lynis/controls/HRDN-7230/
```
<img width="590" height="55" alt="image" src="https://github.com/user-attachments/assets/3300ae0d-5d2b-413a-865f-1eb13fb10bf5" />
<img width="647" height="46" alt="image" src="https://github.com/user-attachments/assets/1aade458-ef77-4164-a45e-04dbb8876cf1" />

<img width="469" height="80" alt="image" src="https://github.com/user-attachments/assets/698d0cd2-4af6-4159-8888-2ea0ad9924f1" />
<img width="731" height="49" alt="image" src="https://github.com/user-attachments/assets/e130d21a-e983-4034-ad51-d8ae27a735b5" />

<img width="518" height="51" alt="image" src="https://github.com/user-attachments/assets/6e26b244-f9ac-4ee1-9e31-5d11ee65ef74" />

<img width="424" height="55" alt="image" src="https://github.com/user-attachments/assets/7fd01ff9-2582-4c02-965e-9e353a93c322" />

<img width="518" height="51" alt="image" src="https://github.com/user-attachments/assets/e419955e-3f64-4f72-b7a1-7a80972347e5" />

<img width="1207" height="591" alt="image" src="https://github.com/user-attachments/assets/ddd2037b-40ac-4724-94f1-190842cdc0f6" />

<img width="1207" height="591" alt="image" src="https://github.com/user-attachments/assets/26ba9b66-555e-4a9b-ae7b-45d56e397d77" />

<img width="1217" height="582" alt="image" src="https://github.com/user-attachments/assets/2b4573d3-7c4a-4f15-9bac-a62d0b8c84a1" />

<img width="710" height="89" alt="image" src="https://github.com/user-attachments/assets/cc500b20-0dbd-466c-955e-a498e1927752" />

<img width="609" height="85" alt="image" src="https://github.com/user-attachments/assets/d3dd7c0c-7e1e-4f34-8376-846182a1886c" />


