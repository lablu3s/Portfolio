## 🖥️**Sessão 2_Linux e Cibersegurança**
### **Auditoria de Sistemas Linux e Análise Avançada de Logs**

### Objetivo: 
Durante esta atividade o objetivo principal consiste em atuar como analista forense para determinar a origem e o sucesso de um ataque a um servidor da infraestrutura, com base na análise de logs de autenticação. Utilizando o ambiente virtual TryHackMe, com os laboratórios  Intro to Logs (para compreender a mecânica dos registos do sistema) e o Linux Server Forensics (navegar até à diretoria de logs do servidor comprometido).


### Code `ssh <User>@<IP_Alvo>`

Este comando serve para aceder a uma máquina remotamente, utilizando as suas credênciais, o user, o IP e o password.

<img width="553" height="137" alt="image" src="https://github.com/user-attachments/assets/bfec0b30-342f-412e-a3c5-3a2ce8fe6115" />
<img width="621" height="374" alt="image" src="https://github.com/user-attachments/assets/b67fa5c0-8bca-464f-82b9-585baa6d572f" />
<img width="685" height="418" alt="image" src="https://github.com/user-attachments/assets/a3d24099-e009-44bf-83b0-7d2a8f04f0e7" />

### Code `cd /var/log/` e Code `ls -la`

O primeiro comando serve para mudar o seu diretório atual de trabalho para a pasta /var/log/ no Linux. O segundo comando serve para listar detalhadamente todos os arquivos e pastas que estão dentro do diretório onde você se encontra no momento.

<img width="704" height="520" alt="image" src="https://github.com/user-attachments/assets/9c739cd8-2a2d-48b9-bd5a-39180e62cec9" />

### Code `grep "Failed password" auth.log`

Esse comando serve para filtrar o arquivo de log e mostrar todas as tentativas de login que falharam por senha incorreta no sistema.

<img width="978" height="184" alt="image" src="https://github.com/user-attachments/assets/a0c9f7a0-22fd-4a47-8219-24658203bfa4" />

### Code `grep "Failed password" auth.log | awk '{print $11}' | sort | uniq -c | sort -nr`

Esse comando serve para criar um ranking dos endereços IP que mais erraram senhas, mostrando a quantidade exata de tentativas fracassadas de cada um, ordenadas do maior para o menor.

<img width="980" height="114" alt="image" src="https://github.com/user-attachments/assets/955c541a-4608-4616-800a-338d88f38d9b" />

### Code `grep -E "Accepted password|Accepted publickey" auth.log`

Esse comando serve para filtrar o arquivo de log e mostrar todas as tentativas de login que foram bem-sucedidas (sucessos de autenticação) no sistema.

<img width="889" height="106" alt="image" src="https://github.com/user-attachments/assets/b2afb873-6f53-4802-8d1e-6134b7cfafc3" />

### Code `grep -E "Failed password|Accepted" auth.log`

Esse comando serve para consolidar a linha do tempo completa de acessos por SSH, mostrando na tela tanto as tentativas que falharam quanto os logins que deram certo.

<img width="978" height="174" alt="image" src="https://github.com/user-attachments/assets/830c8738-c02d-4a5b-a473-2060c751c689" />


### Tarefas:

1. O IP do atacante identificado

O IP do atacante é o mesmo IP que nós estamos utilizado para acessar a máquina do Fred, sendo o IP 10.129.149.182.

<img width="889" height="106" alt="image" src="https://github.com/user-attachments/assets/b2afb873-6f53-4802-8d1e-6134b7cfafc3" />

2. A hora exata do comprometimento (timestamp)

Tendo em conta o primeiro acesso a máquina do Fred, Jul 17 20:36:29.

<img width="889" height="106" alt="image" src="https://github.com/user-attachments/assets/b2afb873-6f53-4802-8d1e-6134b7cfafc3" />

3. O utilizador afetado

O utilizador afetado foi a máquina simulada do Fred com o IP 10.129.159.43.

<img width="1067" height="403" alt="image" src="https://github.com/user-attachments/assets/9ca04a28-bdd7-40db-ae4e-02309a25dc64" />

<img width="553" height="137" alt="image" src="https://github.com/user-attachments/assets/bfec0b30-342f-412e-a3c5-3a2ce8fe6115" />

4. Breve linha temporal do ataque (tentativas falhadas → sucesso)

Através do comando `grep -E "Failed password|Accepted" auth.log` e da análise dos registros observados, pode-se inferir que o IP atacante foi o 10.129.149.182. Nos horários Jul 17 21:14:03 e Jul 17 21:14:24, teve duas tentativas de acesso não sucedidas e a Jul 21:16:39 teve sucesso no acesso e a máquina ficou comprometida.

<img width="978" height="174" alt="image" src="https://github.com/user-attachments/assets/830c8738-c02d-4a5b-a473-2060c751c689" />

OBS: Como a máquina simulada era nova, ao rodar o comando, inicialmente só apresentava o acesso que nós fizemos. Contudo para testar melhor esta funcionalidade foram feitas tentativas falhadas de acesso, como pode ser observado no print.

<img width="608" height="204" alt="image" src="https://github.com/user-attachments/assets/804108b6-2d6d-4fa8-bfbd-0cc3ffdc46dd" />

## Tryhackme
Nesta plataforma ao entrar na sala NMAP, simulamos o hack de uma máquina alvo em um ambiente virtual, baseando nos IP's gerados podemos explorar a máquina e rodar analises de segurança. Este módulo é composto por 15 tasks e a sua elaboração está documentada por meio de prints:

### Task 2: Introduction
