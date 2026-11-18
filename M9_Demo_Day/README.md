# 📦Módulo 9_Demo Day

### Seja bem-vindo ao meu repositório de Demo Day. Este é o módulo final que faz parte do percurso educativo no âmbito do Programa SKODJI DIGITAL. 

## 👥 Equipa de Trabalho

* **Lorette Araújo** — *Desenvolvimento, Configuração AppSheet e Gestão de Projeto*
* **Aida Rodrigues** — *Configuração, Gestão do Inventário e Identidade de Projeto*


Este repositório documenta a elaboração do Projeto Final para a demonstração e avaliação no **Demo Day**. Contém a documentação técnica, relatório de dados, apresentação (pitch) e um video demonstrativo.

# 📦Resk - App de Inventário & Gestão de Stock (AppSheet + Google Sheets)

Uma aplicação móvel e web para registo de inventário e controlo de stock em tempo real com **sincronização offline nativa**. Desenvolvida na plataforma no-code **Google AppSheet** utilizando o **Google Sheets** como base de dados, a solução foi concebida para garantir a continuidade operacional em armazéns, lojas ou no terreno sem dependência de ligação contínua à internet.

---

## 🚀 O Problema e a Solução

### ⚠️ O Problema
Equipas de logística, armazém e vendas no terreno necessitam de registar entradas e saídas de stock em locais com cobertura de rede deficiente (ex.: caves, zonas rurais ou instalações industriais). A falta de ligação em tempo real frequentemente resulta na perda de registos, falhas de contagem e erros na gestão de inventário.

### 💡 A Solução Proposta
A **App de Inventário Resk** utiliza o motor offline nativo do **Google AppSheet**. Os utilizadores podem efetuar leituras, atualizações de quantidades e registos de novos produtos mesmo sem internet. As alterações são guardadas localmente no dispositivo e sincronizadas de forma automática e transparente com a folha de cálculo central no **Google Sheets** assim que a ligação à rede for restabelecida.

---

## ✨ Principais Funcionalidades

* **📡 Sincronização Offline Automática:** Funcionamento contínuo sem rede e sincronização em segundo plano assim que detetado sinal.
* **📦 Gestão de 50+ Artigos de Teste:** Base de dados pronta e otimizada para navegação fluida por dezenas de itens.
* **⚡ Ações Rápidas de Incremento (`+1` / `-1`):** Botões diretos na vista de lista para atualizar quantidades sem abrir formulários extensos.
* **🚨 Alertas Visuais de Stock Crítico:** *Format Rules* personalizadas que destacam automaticamente a vermelho os produtos com quantidade abaixo do limite mínimo.
* **📋 Seleção Dinâmica de Categorias:** Campos do tipo `Enum` para padronização de categorias via listas *drop-down*.
* **📱 Multiplataforma (Android, iOS e Web):** Aplicação nativa instalável via AppSheet em smartphones, tablets e browsers.

---

## 🛠️ Stack Tecnológica & Ferramentas

| Componente | Tecnologia | Descrição |
| --- | --- | --- |
| **Base de Dados Central** | **Google Sheets** | Alojamento relacional dos dados (`Estoque`, `Produtos`, `Movimentos`). |
| **Plataforma App / UI / Logic** | **Google AppSheet** | Motor no-code responsável pela interface, regras de negócio, scanner de código de barras e motor offline. |
| **Design & Identidade** | **Branding Personalizado** | Tema visual adaptado com paleta em tons escuros / `#6B3B27` e logótipo personalizado. |

---

## 📐 Arquitetura de Dados (Google Sheets)

A base de dados no Google Sheets é estruturada nas seguintes tabelas principais:

### Tabela: `Estoque`
* `ID_Produto` (Key / Auto-generated)
* `Nome_Produto` (Text)
* `Categoria` (Enum)
* `Quantidade` (Number)
* `Preco_Unitario` (Price)
* `Ultima_Registo` (ChangeTimestamp)

### Tabela: `Produto`
* `ID_Produto` (Key)
* `Nome_Produto` (Text)
* `Categoria` (Enum)
* `Foto` (Image / URL)
* `Descricao` (LongText)		
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

