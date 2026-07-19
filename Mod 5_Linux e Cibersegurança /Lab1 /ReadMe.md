## 🖥️**Sessão 1_Linux e Cibersegurança**
### **Introdução ao Linux para Segurança e Comandos de Rede**

### Objetivo: 
Durante esta atividade o objetivo principal consiste no **Mapeamento e análise da superfície de exposição de um servidor alvo na rede local**.
Assumindo o papel de auditor de sistemas: o objetivo específico é identificar a interface de rede do próprio ambiente, listar os serviços em escuta e, de seguida, mapear um alvo remoto com o Nmap. Utilizando o ambiente virtual KillerCoda Ubuntu Playground, para familiarização com o CLI e o TryHackMe, para aprender mais sobre o Linux e Cibersegurança no **Laboratório Further Nmap**.

### Tarefas:

1. Ambiente Virtual Ubuntu

Code `ip a`
Mostra todas as interfaces de rede (placas de rede físicas e virtuais) e os endereços IP associados a cada uma delas.

<img width="741" height="318" alt="image" src="https://github.com/user-attachments/assets/559b7bc4-3e4e-4cee-aaf6-2cedf9bda3d4" />


Code `ss - tuln`
Mostra quais portas de rede estão abertas e "escutando" (esperando conexões) no seu próprio sistema.

<img width="1203" height="320" alt="image" src="https://github.com/user-attachments/assets/7ed0fb15-e079-4cd1-ad92-e11b710c1b5c" />


3. Ambiente Virtual Tryhackme

Code `ip a`

<img width="946" height="563" alt="image" src="https://github.com/user-attachments/assets/62f1e2d5-149a-4d90-9a26-f2eb069b04f7" />

Code `ss - tuln`

<img width="659" height="540" alt="image" src="https://github.com/user-attachments/assets/c1fe7597-03e7-4efc-9851-af45d4a8ab1b" />


Code `nmap -sV -sC <alvo>`
É um comando de escaneamento de segurança usado para descobrir informações detalhadas sobre um dispositivo alvo na rede.

-sV: Service Version. Tenta identificar exatamente qual serviço e qual versão do software está rodando em cada porta aberta do alvo.

-sC: Executa os scripts padrão do Nmap (NSE - Nmap Scripting Engine). Esses scripts automatizam testes de segurança comuns, como verificar vulnerabilidades conhecidas ou coletar informações extras de configuração.

<img width="779" height="460" alt="image" src="https://github.com/user-attachments/assets/116cfe37-d165-4a65-a440-4f061493fffb" />



## Tryhackme
Nesta plataforma ao entrar na sala NMAP, simulamos o hack de uma máquina alvo em um ambiente virtual, baseando nos IP's gerados podemos explorar a máquina e rodar analises de segurança. Este módulo é composto por 15 tasks e a sua elaboração está documentada por meio de prints:

### Task 2: Introduction
<img width="873" height="501" alt="image" src="https://github.com/user-attachments/assets/84be64d9-c6a1-42d9-bbd4-fa854f923c18" />

### Task 3: Nmap Switches

#### Code `nmap -h`
Este comando serve para exibir a tela de ajuda (help) do Nmap diretamente no terminal. Utilizando o output deste comando na linha de comando, vai-se resolvendo as tasks do laboratório.

<img width="642" height="567" alt="image" src="https://github.com/user-attachments/assets/6e30e98f-0865-446c-9640-3e83af089f0e" />
<img width="696" height="615" alt="image" src="https://github.com/user-attachments/assets/917a9120-1469-49c8-be7e-a46c284108d6" />
<img width="700" height="619" alt="image" src="https://github.com/user-attachments/assets/f60dbce5-5841-4ac3-bedc-c13957c98639" />
<img width="637" height="432" alt="image" src="https://github.com/user-attachments/assets/b349c635-11c5-44ef-bac3-c43f561c59d4" />
<img width="644" height="472" alt="image" src="https://github.com/user-attachments/assets/f7e7f1f7-ac08-4745-a7a4-fc06fb287dc5" />
<img width="635" height="509" alt="image" src="https://github.com/user-attachments/assets/f339478a-ca86-426a-9a41-b650eb327a99" />
<img width="640" height="320" alt="image" src="https://github.com/user-attachments/assets/aba879f4-6299-4f33-8e45-e4915f14832e" />

### Task 5:  TCP Connect scans 
<img width="647" height="318" alt="image" src="https://github.com/user-attachments/assets/4203c19b-7bcb-474d-a085-97d2f1f79ccc" />

### Task 6: SYN scans
<img width="624" height="303" alt="image" src="https://github.com/user-attachments/assets/50972c40-6d69-4dc2-bf7d-723d19f2bfdf" />

### Task 7: UDP scans
<img width="641" height="327" alt="image" src="https://github.com/user-attachments/assets/fc4d489c-adcf-4d0a-8298-bef406689c0b" />

### Task 8: NULL, FIN and Xmas
<img width="644" height="456" alt="image" src="https://github.com/user-attachments/assets/823b4e0d-917c-4f9c-a6e2-bd73489b3946" />

### Task 9:  ICMP network scanning
<img width="631" height="163" alt="image" src="https://github.com/user-attachments/assets/3aeddf4b-ea16-4e45-8ca2-8073fdcc013c" />

### Task 10: Overview
<img width="633" height="312" alt="image" src="https://github.com/user-attachments/assets/7a29b7c5-45e4-499c-9e6e-7e3f5321f131" />

### Task 11: NSE scripts
<img width="626" height="142" alt="image" src="https://github.com/user-attachments/assets/4a6657df-8363-43e4-9d63-ae37f94d59af" />

### Task 12: Searching for scripts
<img width="640" height="348" alt="image" src="https://github.com/user-attachments/assets/5039e5f2-91c0-45e9-98a9-4964f5250f79" />

### Task 13: Firewall Evasion
<img width="644" height="342" alt="image" src="https://github.com/user-attachments/assets/ff74566b-4b81-4b2c-a531-2f42f9499e0c" />

### Task 14: Pratical
####  Code `ping -c 4 <Ip_Alvo>`
Este comando serve para testar a conectividade entre a sua máquina e o endereço IP alvo, enviando pacotes de diagnóstico para ver se ele está ativo e respondendo na rede.

ping: É o nome da ferramenta. Ela envia pacotes do tipo ICMP Echo Request. Se o alvo receber e estiver configurado para responder, ele devolve um pacote ICMP Echo Reply.

-c 4 Essa flag limita o teste a exatamente 4 pacotes e encerra o comando sozinho.

<img width="621" height="202" alt="image" src="https://github.com/user-attachments/assets/b87e94af-2d78-406e-ad7b-8e0b731cd12c" />

####  Code `nmap -sX -p1-999 <Ip_Alvo>`
Ele é usado para tentar passar por firewalls simples ou sistemas de detecção que filtram pacotes TCP normais (como o SYN).

<img width="908" height="252" alt="image" src="https://github.com/user-attachments/assets/68282261-1d6f-489f-bc9c-ace9860839b0" />

####  Code `nmap -sS -p1-5000 <Ip_Alvo>`
Esse comando realiza um SYN Scan (também conhecido como escaneamento semi-aberto ou furtivo). O Nmap envia um pacote com a flag SYN (pedido de sincronização), simulando o início de uma conexão real. Se a porta estiver aberta, o alvo responde com um pacote SYN/ACK.

<img width="696" height="329" alt="image" src="https://github.com/user-attachments/assets/6a37ce44-5d61-43a9-ae0f-81a7c64aa3ef" />

####  Code `nmap --script=ftp-anon -p21 <Ip_Alvo>`
Esse comando serve para verificar especificamente se um servidor permite o acesso anônimo ao serviço de FTP (porta 21). O FTP (File Transfer Protocol) é usado para transferência de arquivos.

<img width="727" height="301" alt="image" src="https://github.com/user-attachments/assets/e4eac431-3893-4213-b9af-16c53b641cf0" />

<img width="1366" height="2775" alt="image" src="https://github.com/user-attachments/assets/23c15016-5e5e-47b4-a639-ae9b117d4bc8" />

### Task 15: Conclusion

<img width="1366" height="1751" alt="image" src="https://github.com/user-attachments/assets/669c1972-b901-46f3-9b97-adf3f20b557b" />

