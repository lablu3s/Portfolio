## 🖥️**Sessão 4_Linux e Cibersegurança**
### **Gestão Segura de Acessos Remotos SSH em Linux**

### Objetivo: 
Durante esta atividade o objetivo principal consiste na **Proteger o canal de gestão remota do servidor Ubuntu**, eliminando a autenticação tradicional por password e migrando para autenticação criptográfica. Utilizando o Ambiente Virtual TryHackMe — Linux Strength Training (gratuito): https://tryhackme.com/room/linuxstrengthtraining.

### Tarefas:

### 1. Criar um novo utilizador de teste no sistema

#### Comando `sudo adduser <user_id>`

Cria um novo usuário no sistema chamado blue (com direito a pasta home, criação de senha, etc.).

<img width="865" height="515" alt="image" src="https://github.com/user-attachments/assets/0b0a380b-6a25-4377-89ec-e29e381cff91" />

### 2. Configurar o ambiente para aceitar chaves

Estes comandos preparam a pasta SSH do usuário blue para que ele possa se conectar sem senha, usando chaves de criptografia:

#### Comando `sudo mkdir -p /home/<user_id>/.ssh`

Cria o diretório oculto .ssh na pasta do usuário blue. A opção -p garante que o diretório só é criado se ainda não existir (sem gerar erro).

#### Comando `sudo touch /home/<user_id>/.ssh/authorized_keys`

Cria o arquivo em branco authorized_keys, onde ficarão salvas as chaves públicas autorizadas a acessar esse usuário.

#### Comando `sudo chown -R <user id>:<user_id> /home/<user id>/.ssh` 

Altera o dono (owner) e o grupo da pasta .ssh e de tudo dentro dela (devido ao -R, recursivo) para esse usuário.

#### Comando `sudo chmod 700 /home/<user_id>/.ssh`

Define as permissões do diretório .ssh para 700 (leitura, escrita e execução apenas para o dono blue; nenhum outro usuário pode acessar).

#### Comando `sudo chmod 600 /home/<user_id>/.ssh/authorized_keys`

Define as permissões do arquivo authorized_keys para 600 (leitura e escrita apenas para o dono <user id>).

<img width="758" height="160" alt="image" src="https://github.com/user-attachments/assets/a4dc9437-a224-4109-969b-dc8020f3bb72" />

### 3. Gerar um par de chaves Ed25519 robustas

#### Comando `ssh-keygen -t ed25519`

Gera um novo par de chaves SSH (uma chave pública e uma privada) usando o algoritmo Ed25519, que é extremamente seguro, leve e moderno.
(A chave pública gerada por esse comando normalmente é colada dentro do arquivo authorized_keys configurado nos passos anteriores).

<img width="778" height="533" alt="image" src="https://github.com/user-attachments/assets/f1036184-8cfc-44a2-8eb2-442d285c2cee" />

### 4. Transferir a chave pública para o servidor alvo

#### Comando `ssh-copy-id <user_id>@<IP_DO_SERVIDOR>`

Envia automaticamente a sua chave pública (gerada anteriormente) para o servidor remoto no IP 10.129.155.241, sob o usuário blue. O comando se encarrega de colar o conteúdo no arquivo authorized_keys de lá, permitindo que você se conecte no servidor sem precisar digitar senha.

<img width="898" height="444" alt="image" src="https://github.com/user-attachments/assets/a9f7bfc8-0474-42bc-b777-e17b906e9d4e" />

### 5. Editar o ficheiro de configuração do daemon SSH com privilégios de superutilizador

#### Comando `sudo nano /etc/ssh/sshd_config`

Abre o editor de texto nano com privilégios de administrador (sudo) para alterar o arquivo principal de configurações do servidor SSH (sshd_config).

<img width="625" height="137" alt="image" src="https://github.com/user-attachments/assets/1da5e53f-ceef-4d2a-ab15-c4d5f1c4b11f" />

<img width="884" height="575" alt="image" src="https://github.com/user-attachments/assets/9cf49b63-a3da-4962-977c-02a3e38df875" />

Essas são as linhas adicionadas ou alteradas dentro do arquivo /etc/ssh/sshd_config para aumentar a segurança do servidor:

**PermitRootLogin no:** Proíbe o usuário administrador principal (root) de fazer login diretamente via SSH. Isso obriga qualquer administrador a logar primeiro com uma conta comum (como blue) e só então usar sudo, aumentando o rastreamento de ações.

**PasswordAuthentication no:** Desativa o login via senha convencional. A partir deste momento, apenas conexões usando chaves SSH autorizadas serão permitidas, bloqueando ataques do tipo força bruta (brute force).

**Port 2222:** Altera a porta padrão do serviço SSH de 22 para 2222. Isso reduz significativamente varreduras automatizadas e ataques de bots pela internet, que costumam focar apenas na porta padrão.

<img width="661" height="277" alt="image" src="https://github.com/user-attachments/assets/e2d249f1-e3d3-4862-a13e-d648b2b6e657" />
<img width="660" height="410" alt="image" src="https://github.com/user-attachments/assets/c6178936-ab14-4aa8-8fe5-50adcb116ae4" />
<img width="651" height="428" alt="image" src="https://github.com/user-attachments/assets/44ae3caa-0bb6-43d0-841f-0a5c84f5611f" />

### 6. Validar a sintaxe das alterações e reiniciar o serviço SSH

Estes comandos servem para aplicar e verificar as novas configurações do SSH que foram salvas no arquivo /etc/ssh/sshd_config:

#### Comando `sudo sshd -t`

O comando sudo sshd -t serve para testar a sintaxe do arquivo de configuração do SSH (/etc/ssh/sshd_config) sem reiniciar o serviço.

#### Comando `sudo systemctl daemon-reload`

Recarrega o gerenciador de serviços do sistema (systemd). É necessário quando você altera arquivos de configuração de unidades ou quando distribuições recentes (como Ubuntu 22.04/24.04) utilizam ativação do SSH via socket e precisam atualizar as regras do sistema.

#### Comando `sudo systemctl restart ssh.socket`

Reinicia o socket de escuta do SSH. Nas versões mais recentes do Ubuntu/Debian, o SSH pode rodar via socket (ouvindo portas como a 2222 que você configurou). Reiniciá-lo força o serviço a escutar na nova porta imediatamente.

#### Comando `sudo systemctl restart ssh`

Reinicia o serviço principal do SSH (sshd). Isso faz com que as alterações do arquivo de configuração (como desativar senhas e bloquear o root) entrem em vigor para novas conexões.

#### Comando `sudo systemctl status ssh`

Exibe o status atual do serviço SSH. Serve para confirmar se ele está ativo e rodando (active (running)) sem erros e para ver em qual porta ele está escutando.

<img width="760" height="564" alt="image" src="https://github.com/user-attachments/assets/88a45aea-1b55-4d1b-b770-c42e96e6867a" />
<img width="845" height="551" alt="image" src="https://github.com/user-attachments/assets/f78677ae-e173-44f9-ae5d-efa12360ac73" />
<img width="989" height="541" alt="image" src="https://github.com/user-attachments/assets/2334b970-3c77-48f9-835d-b6e5502f70a9" />

<img width="577" height="162" alt="image" src="https://github.com/user-attachments/assets/10f6c863-df7f-413b-9c8a-52b644cda2bb" />
<img width="610" height="194" alt="image" src="https://github.com/user-attachments/assets/bfaac929-8496-4561-9925-222e9756a711" />
<img width="639" height="190" alt="image" src="https://github.com/user-attachments/assets/e01e9b46-eebd-4a88-8262-7240350c6d74" />
<img width="894" height="535" alt="image" src="https://github.com/user-attachments/assets/471bdc32-f132-47c9-a947-3c669597fad8" />

<img width="892" height="385" alt="image" src="https://github.com/user-attachments/assets/1ead5741-f5c2-446c-85f4-0aba40f803d0" />
<img width="889" height="253" alt="image" src="https://github.com/user-attachments/assets/36b894c7-f2a0-4b68-bf29-a3bb18de06c8" />
<img width="852" height="278" alt="image" src="https://github.com/user-attachments/assets/da8a4ac3-e7bc-4bf2-b621-702dafc04dfb" />

<img width="981" height="378" alt="image" src="https://github.com/user-attachments/assets/d21ead00-2aba-4289-a8ee-822a338add07" />
<img width="868" height="557" alt="image" src="https://github.com/user-attachments/assets/33485110-596d-47bc-a50b-13a9d8a6eeaf" />

### 6. Num novo terminal, testar o acesso via chave privada e nova porta

Este comando serve para se conectar remotamente ao servidor aplicando todas as regras de segurança recém-criadas:

#### Comando `ssh -i <caminho_da_chave> -p 2222 <user_id>@<IP_DO_SERVIDOR>`

O computador tentará entrar no servidor 10.128.174.94 através da porta 2222 logando como blue. O servidor vai validar se a sua chave privada id_ed25519 corresponde à chave pública que foi gravada no arquivo authorized_keys. Se baterem, seu acesso é concedido instantaneamente sem precisar digitar senha.

<img width="882" height="552" alt="image" src="https://github.com/user-attachments/assets/af54f3d3-4cdf-4542-bb9e-c702198fd62d" />
<img width="717" height="199" alt="image" src="https://github.com/user-attachments/assets/d29545fb-3f77-48cb-a2f7-1acb8a9ddb14" />

