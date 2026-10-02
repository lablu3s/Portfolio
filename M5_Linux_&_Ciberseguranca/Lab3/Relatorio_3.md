## 🖥️**Sessão 3_Linux e Cibersegurança**
### **Hardening de Redes Linux e Configuração de Firewalls**

### Objetivo: 
Durante esta atividade o objetivo principal consiste na **Configuração de uma política defensiva estrita** para impedir acessos não autorizados a serviços críticos do servidor, combinando UFW e iptables. Utilizando o Ambiente Virtual TryHackMe — Network Security Essentials (gratuito): https://tryhackme.com/room/networksecurityessentials.

### Tarefas:

#### 1. Comando `sudo ufw status`

Esse comando serve para verificar o status atual do Firewall do Ubuntu/Debian (conhecido como UFW - Uncomplicated Firewall).

<img width="597" height="209" alt="image" src="https://github.com/user-attachments/assets/c1398d63-9808-4fc8-805e-aa59723ea13b" />


#### 2. Comando `sudo ufw default deny incoming' e 'sudo ufw default allow outgoing`

Esses dois comandos trabalham em dupla e servem para definir a política padrão (comportamento base) do seu firewall UFW.
Eles estabelecem uma das regras mais fundamentais e recomendadas da segurança da informação: bloquear tudo o que tenta entrar por padrão, mas permitir tudo o que tenta sair.

<img width="578" height="167" alt="image" src="https://github.com/user-attachments/assets/39e130ef-712a-4f92-bd51-15b033c0ba1d" />


#### 3. Comando `sudo ufw allow 22/tcp`

Esse comando serve para abrir a porta 22 (usada pelo protocolo SSH) para conexões TCP no seu firewall UFW.
Ele cria uma exceção explícita na regra que acabamos de ver (deny incoming), permitindo que dispositivos externos consigam se conectar remotamente à sua máquina através do terminal.

<img width="579" height="159" alt="image" src="https://github.com/user-attachments/assets/ee76c2f3-d0fc-4494-91b2-a5e501ca72ca" />


#### 4. Comando `sudo iptables -A INPUT -s 203.0.113.50 -j DROP`

Esse comando serve para bloquear imediatamente qualquer tráfego vindo de um endereço IP específico (neste caso, o IP 203.0.113.50), fazendo com que a sua máquina ignore completamente o invasor.
É o comando clássico de firewall em nível de kernel (mais baixo nível que o UFW) para cortar um ataque de força bruta ou varredura maliciosa na hora.

<img width="677" height="121" alt="image" src="https://github.com/user-attachments/assets/1a6a09e0-4602-44c2-a459-a539edb08d27" />


#### 5. Comando `sudo iptables-save | sudo tee /etc/iptables/rules.v4`

Esse comando serve para salvar as suas regras atuais do IPTables permanentemente, garantindo que os bloqueios de IP não sumam quando a máquina for reiniciada.
Por padrão, o iptables guarda as regras apenas na memória RAM. Se o sistema reiniciar, o firewall volta completamente limpo. Esse comando resolve esse problema salvando a configuração em um arquivo em disco.

<img width="696" height="576" alt="image" src="https://github.com/user-attachments/assets/243b8929-29e9-415d-9f37-c1e14f7cc5c1" />


#### 6. Comando `sudo ufw status verbose`

Esse comando serve para exibir o status do seu firewall UFW com o nível máximo de detalhes, incluindo as políticas padrão de tráfego e o perfil de registro de logs do sistema.
Enquanto o comando simples (sudo ufw status) mostra apenas as regras que você criou, a flag verbose traz o panorama completo da segurança da rede no momento.

<img width="602" height="275" alt="image" src="https://github.com/user-attachments/assets/4a4352a4-e78c-4ffb-a566-80f0429931ad" />


#### 7. Comando `sudo iptables -L -v`

Esse comando serve para listar detalhadamente todas as regras de firewall ativas na memória do IPTables, mostrando o tráfego em tempo real (contadores de pacotes e bytes) que passou por cada uma delas.
Ao adicionar as flags -L (List) e -v (Verbose), isso força o IPTables a sair do modo compacto e exibir uma visão cirúrgica da segurança do sistema.

<img width="777" height="532" alt="image" src="https://github.com/user-attachments/assets/e4d10252-d4e3-4fa7-8415-044c8569d51f" />
<img width="968" height="529" alt="image" src="https://github.com/user-attachments/assets/9e19fed1-c999-49b7-bb0a-f5ab4e72f1d6" />
<img width="952" height="519" alt="image" src="https://github.com/user-attachments/assets/cf680ced-3b59-4686-bc11-c7e8864b40d2" />
<img width="970" height="474" alt="image" src="https://github.com/user-attachments/assets/fcd1bf25-ad21-479f-b63b-4e92cba6e351" />
<img width="970" height="474" alt="image" src="https://github.com/user-attachments/assets/3c72470e-ec85-4397-adf1-6ad5957bb07a" />
<img width="970" height="485" alt="image" src="https://github.com/user-attachments/assets/fc26cf86-5f5f-449d-8620-17cfb180811f" />
<img width="937" height="279" alt="image" src="https://github.com/user-attachments/assets/b80ece24-550c-46f4-bc9d-cd6f2a541f60" />


## Explicação das políticas aplicadas

Com base na sequência de comandos que executamos e analisamos no laboratório, o sistema agora está protegido por uma abordagem de segurança conhecida como Defesa em Profundidade, utilizando duas camadas de proteção (o UFW para a política geral e o IPTables para bloqueios cirúrgicos).

### O que está Bloqueado e por quê?

1. Bloqueio Geral de Entrada (Incoming Trafffic)

O que está bloqueado: Qualquer tentativa de conexão externa vinda da rede ou da internet em direção à sua máquina está sumariamente proibida.

Por quê: Essa é a regra base (sudo ufw default deny incoming). Ela garante que, se você instalar um novo serviço ou aplicativo por acidente, ele não fique exposto para a rede. A sua máquina fica "invisível" a varreduras de portas comuns e pings.

2. Bloqueio Direcionado a um Atacante Específico

O que está bloqueado: Todo e qualquer pacote vindo do endereço IP 203.0.113.50 é descartado em silêncio.

Por quê: Esse IP foi identificado nos logs de autenticação (auth.log) tentando forçar a entrada no sistema por meio de um ataque de força bruta (brute-force). A regra aplicada no nível do kernel do Linux (sudo iptables -A INPUT -s 203.0.113.50 -j DROP) neutraliza o atacante imediatamente, sem que ele sequer saiba se a sua máquina está online.

### O que está Permitido e por quê?

1. Acesso Remoto Controlado (Porta 22)

O que está liberado: Conexões de entrada na porta 22/TCP (serviço SSH).

Por quê: Criamos uma exceção explícita (sudo ufw allow 22/tcp) para garantir que você ou sua equipe de administração consigam gerenciar o servidor remotamente. O firewall barra todo o resto, mas deixa o canal de gerenciamento aberto.

2. Saída Livre para a Internet (Outgoing Traffic)

O que está liberado: Qualquer comunicação que nasça dentro da sua máquina em direção ao mundo externo.

Por quê: A política padrão de saída (sudo ufw default allow outgoing) permite que o seu sistema funcione normalmente para baixar atualizações de segurança (apt update), realizar buscas de rede ou clonar repositórios, sem que as suas próprias ferramentas sejam bloqueadas pelo firewall.

### Estado Atual da Defesa

Essas regras foram salvas permanentemente em disco (/etc/iptables/rules.v4). O cenário resultante é um sistema altamente restritivo: ele só fala com o ambiente externo quando você solicita, e só aceita conexões de fora se forem estritamente para o canal seguro de administração (SSH), mantendo os atacantes conhecidos completamente isolados.
   



