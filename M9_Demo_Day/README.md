# 📦Módulo 9_Demo Day

### Seja bem-vindo ao meu repositório de Demo Day. Este é o módulo final que faz parte do percurso educativo no âmbito do Programa SKODJI DIGITAL. 

## 👥 Equipa Aida e Lorette

* **Lorette Araújo** (Coordenadora)— *Desenvolvimento banco de dados, Configuração AppSheet e Gestão de Projeto*
* **Aida Rodrigues** (Membro) — *Documentação técnica e Identidade de Projeto*


Este repositório documenta a elaboração do Projeto Final para a Demonstração e Avaliação no **DemoDay**. Contém a documentação técnica, relatório de dados, apresentação (pitch) e um video demonstrativo.

# 📦🛒Stok Prontu 
> App de Gestão diária de inventário e vendas para o comércio local

O **Stok Prontu** é uma solução desenvolvida para simplificar a gestão operacional de pequenos e médios estabelecimentos comerciais. A aplicação centraliza o controlo de stock em tempo real com **sincronização offline nativa**, o registo ágil de vendas no balcão, o cálculo automático de valores e a emissão instantânea de recibos em PDF.

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
1. **Validação Ativa de Inventário:** Impedir vendas acima da quantidade real em stock.
2. **Cálculo Automático de Vendas:** Atualização instantânea dos subtotais, total da compra e valor a devolver ao cliente.
3. **Emissão de Recibos em PDF:** Geração automática e envio de recibos com design profissional e harmonizado com a identidade visual da marca.
4. **Organização na Nuvem:** Gravação direta de todos os documentos gerados numa estrutura organizada no Google Drive.

---

## ✨ Principais Funcionalidades

* **📡 Sincronização Offline Automática:** Funcionamento contínuo sem rede e sincronização em segundo plano assim que detetado sinal.
* **📦 Gestão de Dinâmica de Stock:** Base de dados pronta e otimizada para navegação fluida por dezenas de itens. Colunas virtuais que calculam o stock atualizado automaticamente com base nas entradas e saídas de mercadoria.
* **⚡ Ações Rápidas:** Botões diretos nas diferentes vistas para atualizar quantidades de produtos na estante, adicionar ou excluir produtos, finalizar vendas e fazer o fecho da contabilidade diária sem abrir formulários extensos.
* **🚨 Alertas Visuais de Stock Crítico:** *Format Rules* personalizadas que destacam automaticamente a amarelo os produtos com quantidade abaixo do limite mínimo.
* **🚨 Automação de Stock Crítico:** Disparo de *Bot* de automação quando os produtos atingem uma quantidade abaixo do limite mínimo, enviando uma notificação por email.
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
| **Base de Dados (Backend/Data Layer)** | **Google Sheets** | Alojamento relacional dos dados (`Produtos`,`Estante`,`Vendas` `Contabilidade`). |
| **Plataforma de Desenvolvimento (Frontend/App)** | **Google AppSheet** | Motor no-code responsável pela interface, regras de negócio e motor offline. |
| **Motor de Documentos** |**Google Docs** | Elaboração de documentação técnica |
| **Armazenamento de Ficheiros** | **Google Drive** |Alojamento dos dados, imagens e templates utilizados no Appsheet  |
| **Design & Identidade** | **Canva/Gemini** | Criação de logótipo personalizado, paleta de cores (#66331E) e prototipagem visual |

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
Os 50 artigos iniciais de teste utilizados foram baseados em um Stock comum de uma pequena loja de comércio de produtos essenciais em Cabo Verde.

## 📱 Estrutura da Interface (UI/UX)

A aplicação foi organizada em 3 vistas centrais no menu inferior para maximizar a produtividade:

1. **📦 Estante (Deck View):** Vista principal com pesquisa, agrupamento por categoria, indicadores visuais de stock baixo e botões de ação rápida.
2. **💳Nova Venda (Form View):** Formulário para registar uma nova venda, com seleção produtos e quantidades.
3. **🛒Detalhes das Vendas (Table View):** Vista organizada em foormato de tabela com toddaas as informações referentes as vendas.

No menu lateral foram organizadas as vistas secundárias:

1. **📦 Produtos (Gallery View):** Vista de galeria para consultar visualmente os produtos do inventário.
2. **💵Contabilidade (Table View):** Vista organizada por data, referente do fecho de contabilidade diária.
---

## 👥 Equipa de Desenvolvimento

O projeto foi concebido e executado por uma equipa dedicada de 2 elementos:

| Membro | Função | Foco Técnico |
| :--- | :--- | :--- |
|Lorette Araújo | **Desenvolvedor App & Dados** | • Modelação da base de dados no Google Sheets.<br>• Configuração de tabelas, relações e colunas virtuais no AppSheet.<br>• Implementação de fórmulas de validação, somatórios e cálculos.<br>• Configuração dos *Bots* de automação para geração de PDF.<br>• Produção do vídeo demonstrativo da aplicação. |
| Aida  Rodrigues | **Designer & Documentador Técnico** | • Criação da identidade visual completa e logótipo da marca **Stok Prontu**.<br>• Concepção e estilização do modelo de recibo no Google Docs.<br>• Elaboração de especificações técnicas, manuais e documentação do projeto. |


## 📁 Estrutura do Repositório

```text
├── docs/
│   ├── manual_utilizador.pdf       # Guia prático de utilização da app
│   └── especificacao_tecnica.md    # Documentação de fórmulas e colunas virtuais
├── templates/
│   └── template_recibo.docx        # Modelo base do Google Docs para a automação
├── media/
│   ├── logo_stok_prontu.png        # Recurso gráfico oficial
│   └── demonstracao_app.mp4        # Vídeo demonstrativo da app em execução
└── README.md                       # Documentação principal do repositório
```

---

## ⚙️ Como Configurar e Implementar o Projeto

### 1. Preparar o Google Sheets
1. Crie uma nova folha de cálculo no Google Drive com as abas `Produto`, `Estante`, `Categorias`, `Itens_Venda`, `Vendas` e `Contabilidade_Diaria`.
2. Preencha os cabeçalhos das colunas conforme descrito na secção **Arquitetura de Dados**.
3. Adicione os 50 artigos iniciais de teste.

### 2. Gerar a App no AppSheet
1. No menu do Google Sheets, aceda a **Extensões > AppSheet > Criar uma app**.
2. Aguarde a importação automática das tabelas.

### 3. Configurar e personalizar a App
1. Configuração dos dados das tabelas e as suas propriedades.
2. Organização das vistas e dos menus, e como os dados serão apresentados.
3. Formatação de elementos visuais, como o logótipo, as cores, os tamanhos e a tipografia.
4. Configuração dos botões de ação para determinadas operações.
5. Automação de Bots, para realizar atividades na App.
6. Configuração da segurança no sign-in.

### 4. Activar a Sincronização Offline
1. No painel do AppSheet, vá a **Security / App Properties > Offline Sync**.
2. Ative as opções:
   * `Store offline content for offline use`
   * `The app can start when offline`
   * `Automatic sync`
3. Guarde as alterações (**Save**).

### 5. Testar o Modo Offline no Telemóvel
1. Instale a app **AppSheet** na Play Store / App Store.
2. Inicie sessão com a sua conta Google e abra a app do inventário.
3. Ative o **Modo de Avião** no dispositivo.
4. Faça edições no stock ou adicione novos produtos.
5. Desative o Modo de Avião e confirme a atualização automática dos dados na folha do Google Sheets.

---
### 📝 Licença & Uso
Este projeto foi desenvolvido para fins demonstrativos e académicos de gestão comercial. Sentir-se livre para adaptar e reutilizar a estrutura para o seu próprio negócio.
