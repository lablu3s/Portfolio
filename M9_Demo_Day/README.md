# 📦Módulo 9_Demo Day

### Seja bem-vindo ao meu repositório de Demo Day. Este é o módulo final que faz parte do percurso educativo no âmbito do Programa SKODJI DIGITAL. 

## 👥 Equipa de Trabalho

* **Lorette Araújo** — *Desenvolvimento, Configuração AppSheet e Gestão de Projeto*
* **Aida Rodrigues** — *Configuração, Gestão do Inventário e Identidade de Projeto*


Este repositório documenta a elaboração do Projeto Final para a demonstração e avaliação no **Demo Day**. Contém a documentação técnica, relatório de dados, apresentação (pitch) e um video demonstrativo.

# 📦Stok Prontu - App de Gestão diária de inventário e vendas para o comércio local

O **Stok Prontu** é uma solução *no-code* desenvolvida para simplificar a gestão operacional de pequenos e médios estabelecimentos comerciais. A aplicação centraliza o controlo de stock em tempo real com **sincronização offline nativa**, o registo ágil de vendas no balcão, o cálculo automático de troco e a emissão instantânea de recibos em PDF.

 Desenvolvida na plataforma no-code **Google AppSheet** utilizando o **Google Sheets** como base de dados, a solução foi concebida para garantir a continuidade operacional de lojas sem dependência de ligação contínua à internet.

---

## 🚀 O Problema e a Solução

### ⚠️ O Problema
Muitos pequenos comerciantes em Cabo Verde enfrentam desafios diários no controlo do seu negócio, tais como:
- **Rotura de stock inesperada:** Dificuldade em acompanhar as saídas e saber exatamente quais artigos precisam de reposição.
- **Erros no cálculo de trocos e totais:** Falhas manuais durante o atendimento em momentos de maior afluência.
- **Falta de comprovativos profissionais:** Ausência de um sistema simples e rápido para emitir recibos claros e personalizados aos clientes.
- **Custos elevados de software tradicional:** Soluções de POS/ERP complexas que exigem infraestrutura dispendiosa e ligação constante à internet.

### 💡 A Solução Proposta
O **Stok Prontu** resolve estes problemas ao oferecer uma aplicação móvel e desktop intuitiva, de baixo custo e com suporte a funcionamento *offline*, permitindo:
1. **Validação Ativa de Inventário:** Impedir vendas acima da quantidade real em stock através de regras automáticas no formulário (`Valid If`).
2. **Cálculo Automático de Vendas e Troco:** Atualização instantânea dos subtotais, total da compra e valor a devolver ao cliente.
3. **Emissão de Recibos em PDF:** Geração automática e envio de recibos com design profissional e harmonizado com a identidade visual da marca.
4. **Organização na Nuvem:** Gravação direta de todos os documentos gerados numa estrutura organizada no Google Drive.

---

## ✨ Principais Funcionalidades

* **📡 Sincronização Offline Automática:** Funcionamento contínuo sem rede e sincronização em segundo plano assim que detetado sinal.
* **📦 Gestão de Dinâmica de Stock:** Base de dados pronta e otimizada para navegação fluida por dezenas de itens. Colunas virtuais que calculam o stock atualizado automaticamente com base nas entradas e saídas de mercadoria.
* **⚡ Ações Rápidas:** Botões diretos nas vistas para atualizar quantidades, adicionar ou excluir produtos,  sem abrir formulários extensos.
* **📦 Gestão de 50 Artigos de Teste:** Base de dados pronta e otimizada para navegação fluida por dezenas de itens.
* **⚡ Ações Rápidas de Incremento (`+1` / `-1`):** Botões diretos na vista de lista para atualizar quantidades sem abrir formulários extensos.
* **🚨 Alertas Visuais de Stock Crítico:** *Format Rules* personalizadas que destacam automaticamente a vermelho os produtos com quantidade abaixo do limite mínimo.
* **📋 Seleção Dinâmica de Categorias:** Padronização de categorias via listas *drop-down*.
* **🛡️ Proteção contra Vendas Sem Stock:** Alertas e bloqueios automáticos caso a quantidade inserida supere o inventário disponível.
* **💳 Registo Rápido de Vendas:** Seleção de produtos com cálculo automático de subtotal por item.
* **💵 Gestão de Pagamentos:** Registo do valor entregue pelo cliente com cálculo automático de troco (garantindo valores não negativos).
* **📄 Automação de Recibos em PDF:** Disparo de *Bot* de automação ao finalizar cada venda, gerando um documento estilizado com a marca **Stok Prontu**.
* **📱 Multiplataforma (Android, iOS e Web):** Aplicação nativa instalável via AppSheet em smartphones, tablets e browsers.
---

## 🛠️ Stack Tecnológica & Ferramentas

| Componente | Tecnologia | Descrição |
| --- | --- | --- |
| **Base de Dados (Backend/Data Layer)** | **Google Sheets** | Alojamento relacional dos dados (`Estoque`, `Produtos`, `Movimentos`). |
| **Plataforma de Desenvolvimento (Frontend/App)** | **Google AppSheet** | Motor no-code responsável pela interface, regras de negócio, scanner de código de barras e motor offline. |
| **Motor de Documentos** |**Google Docs** | Elaboração de documentaçãoo técnica
| **Base de Dados Central** | **Google Sheets** | Alojamento relacional dos dados (`Estante`, `Produtos`, `Contabilidade`). |
| **Base de Dados Auxiliar** | **One Drive** |Alojamento dos dados utilizados no Appsheet  |
| **Plataforma App / UI / Logic** | **Google AppSheet** | Motor no-code responsável pela interface, regras de negócio e motor offline. |
| **Design & Identidade** | **Branding Personalizado** | Tema visual adaptado com paleta em tons escuros / `#6B3B27` e logótipo personalizado. |

---

## 📐 Arquitetura de Dados (Google Sheets)

A base de dados no Google Sheets é estruturada nas seguintes tabelas principais:

### Tabela: `Produto`
* `ID_Produto` (Key)
* `Nome_Produto` (Text)
* `Categoria` (Ref)
* `Preco` (Price)
* `Foto` (Image / URL)
* `Descricao` (LongText)

### Tabela: `Estante`
* `ID_Estante` (Key)
* `Nome_Produto` (Text)
* `Categoria` (Ref)
* `Stock_Inicial` (Number)
* `Quantidade_Stock` (Number)
* `Preco_Unitario` (Ref)
* `Ultimo_Registo` (DateTime)
---
Os 50 artigos iniciais de teste utilizados foram baseados num Estoque comum de uma pequena loja de venda de produtos essenciais em Cabo Verde.

## 📱 Estrutura da Interface (UI/UX)

A aplicação foi organizada em 3 vistas centrais no menu inferior para maximizar a produtividade:

1. **📦 Estoque (Deck / Table View):** Vista principal com pesquisa, agrupamento por categoria, indicadores visuais de stock baixo e botões de ação rápida.
2. **📦 Produtos (Gallery View):** Vista de galeria para consultar visualmente os produtos do inventário.
3. **📅 Registos (Calendar View):** Calendário com os registos das entradas e saídas do estoque.

---

## ⚙️ Como Configurar e Implementar o Projeto

### 1. Preparar o Google Sheets
1. Crie uma nova folha de cálculo no Google Drive com as abas `Estoque` e `Produto`.
2. Preencha os cabeçalhos das colunas conforme descrito na secção **Arquitetura de Dados**.
3. Adicione os 50 artigos iniciais de teste.

### 2. Gerar a App no AppSheet
1. No menu do Google Sheets, aceda a **Extensões > AppSheet > Criar uma app**.
2. Aguarde a importação automática das tabelas.

### 3. Activar a Sincronização Offline
1. No painel do AppSheet, vá a **Security / App Properties > Offline Sync**.
2. Ative as opções:
   * `Store offline content for offline use`
   * `The app can start when offline`
   * `Automatic sync`
3. Guarde as alterações (**Save**).

### 4. Testar o Modo Offline no Telemóvel
1. Instale a app **AppSheet** na Play Store / App Store.
2. Inicie sessão com a sua conta Google e abra a app do inventário.
3. Ative o **Modo de Avião** no dispositivo.
4. Faça edições no stock ou adicione novos produtos.
5. Desative o Modo de Avião e confirme a atualização automática dos dados na folha do Google Sheets.

---

