## 🖥️**Sessão 4_Linux e Cibersegurança**
### **Gestão Segura de Acessos Remotos SSH em Linux**

### Objetivo: 
Durante esta atividade o objetivo principal consiste na **Proteger o canal de gestão remota do servidor Ubuntu**, eliminando a autenticação tradicional por password e migrando para autenticação criptográfica. Utilizando o Ambiente Virtual TryHackMe — Linux Strength Training (gratuito): https://tryhackme.com/room/linuxstrengthtraining.

### Tarefas:

#### 1. Criar um novo utilizador de teste no sistema
#### Comando `sudo adduser <user id>`

<img width="865" height="515" alt="image" src="https://github.com/user-attachments/assets/0b0a380b-6a25-4377-89ec-e29e381cff91" />

#### 2. Configurar o ambiente para aceitar chaves
#### Comando ``

<img width="758" height="160" alt="image" src="https://github.com/user-attachments/assets/a4dc9437-a224-4109-969b-dc8020f3bb72" />

#### 3. Gerar um par de chaves Ed25519 robustas
#### Comando `ssh-keygen -t ed25519`

<img width="778" height="533" alt="image" src="https://github.com/user-attachments/assets/f1036184-8cfc-44a2-8eb2-442d285c2cee" />
<img width="898" height="444" alt="image" src="https://github.com/user-attachments/assets/a9f7bfc8-0474-42bc-b777-e17b906e9d4e" />
<img width="884" height="575" alt="image" src="https://github.com/user-attachments/assets/9cf49b63-a3da-4962-977c-02a3e38df875" />
<img width="625" height="137" alt="image" src="https://github.com/user-attachments/assets/1da5e53f-ceef-4d2a-ab15-c4d5f1c4b11f" />
<img width="857" height="567" alt="image" src="https://github.com/user-attachments/assets/eb20d197-03ff-4978-8c40-1c4f7c30d320" />
<img width="577" height="162" alt="image" src="https://github.com/user-attachments/assets/10f6c863-df7f-413b-9c8a-52b644cda2bb" />
<img width="610" height="194" alt="image" src="https://github.com/user-attachments/assets/bfaac929-8496-4561-9925-222e9756a711" />
<img width="639" height="190" alt="image" src="https://github.com/user-attachments/assets/e01e9b46-eebd-4a88-8262-7240350c6d74" />
<img width="894" height="535" alt="image" src="https://github.com/user-attachments/assets/471bdc32-f132-47c9-a947-3c669597fad8" />
<img width="892" height="385" alt="image" src="https://github.com/user-attachments/assets/1ead5741-f5c2-446c-85f4-0aba40f803d0" />
<img width="889" height="253" alt="image" src="https://github.com/user-attachments/assets/36b894c7-f2a0-4b68-bf29-a3bb18de06c8" />
<img width="852" height="278" alt="image" src="https://github.com/user-attachments/assets/da8a4ac3-e7bc-4bf2-b621-702dafc04dfb" />

<img width="981" height="378" alt="image" src="https://github.com/user-attachments/assets/d21ead00-2aba-4289-a8ee-822a338add07" />
<img width="868" height="557" alt="image" src="https://github.com/user-attachments/assets/33485110-596d-47bc-a50b-13a9d8a6eeaf" />
<img width="661" height="277" alt="image" src="https://github.com/user-attachments/assets/e2d249f1-e3d3-4862-a13e-d648b2b6e657" />
<img width="651" height="428" alt="image" src="https://github.com/user-attachments/assets/44ae3caa-0bb6-43d0-841f-0a5c84f5611f" />
<img width="660" height="410" alt="image" src="https://github.com/user-attachments/assets/c6178936-ab14-4aa8-8fe5-50adcb116ae4" />
<img width="760" height="564" alt="image" src="https://github.com/user-attachments/assets/88a45aea-1b55-4d1b-b770-c42e96e6867a" />
<img width="845" height="551" alt="image" src="https://github.com/user-attachments/assets/f78677ae-e173-44f9-ae5d-efa12360ac73" />
<img width="989" height="541" alt="image" src="https://github.com/user-attachments/assets/2334b970-3c77-48f9-835d-b6e5502f70a9" />
<img width="882" height="552" alt="image" src="https://github.com/user-attachments/assets/af54f3d3-4cdf-4542-bb9e-c702198fd62d" />
<img width="717" height="199" alt="image" src="https://github.com/user-attachments/assets/d29545fb-3f77-48cb-a2f7-1acb8a9ddb14" />

