## 📦 Módulo 9 — Demo Day

### Seja bem-vindo ao repositório de Demo Day. Este é o módulo final que faz parte do percurso educativo no âmbito do Programa SKODJI DIGITAL. 

## 👥 Equipa Aida e Lorette

* **Lorette Araújo** (Coordenadora)— *Desenvolvimento banco de dados, Configuração AppSheet e Gestão de Projeto*
* **Aida Rodrigues** (Membro) — *Documentação técnica e Identidade de Projeto*


Este repositório documenta a elaboração do Projeto Final para a Demonstração e Avaliação no **DemoDay**. Contém a documentação técnica, relatório de dados, apresentação (pitch) e um video demonstrativo.

# 📦🛒Stok Prontu 
> App de Gestão diária de inventário e vendas para o comércio local

O **Stok Prontu** é uma solução desenvolvida para simplificar a gestão operacional de pequenos e médios estabelecimentos comerciais. A aplicação centraliza o controlo de stock em tempo real com **sincronização offline suportada pelo AppSheet**, o registo ágil de vendas no balcão, o cálculo automático de valores e a emissão instantânea de recibos em PDF.

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
* **💵 Gestão de Pagamentos:** Registo do valor entregue pelo cliente com cálculo automático de troco e validações para evitar valores negativos.
* **📄 Automação de Recibos em PDF:** Disparo de *Bot* de automação ao finalizar cada venda, gerando um documento estilizado com a marca **Stok Prontu**.
* **📱 Multiplataforma (Android, iOS e Web):** Aplicação instalável via AppSheet em smartphones, tablets e browsers.
---

## 🛠️ Stack Tecnológica & Ferramentas

| Componente | Tecnologia | Descrição |
| --- | --- | --- |
| **Base de Dados (Backend/Data Layer)** | **Google Sheets** | Alojamento relacional dos dados (`Utilizador`, `Produto`, `Categorias`, `Estante`, `Itens_Venda`, `Vendas` e `Contabilidade_Diaria`). |
| **Plataforma de Desenvolvimento (Frontend/App)** | **Google AppSheet** | Motor no-code responsável pela interface, regras de negócio e motor offline. |
| **Motor de Documentos** | **Google Docs** | Elaboração de documentação técnica. |
| **Armazenamento de Ficheiros** | **Google Drive** | Alojamento dos dados, imagens e templates utilizados no AppSheet. |
| **Design & Identidade** | **Canva / Gemini** | Criação de logótipo personalizado, paleta de cores (#66331E) e prototipagem visual. |
| **Produção Audiovisual** | **Canva / Capcut** | Criação de video demonstrativo do funcionamento da aplicação. |

---

## 📐 Arquitetura de Dados (Google Sheets)

A base de dados no Google Sheets é estruturada nas seguintes tabelas principais:

### Tabela `Utilizador`

Esta tabela contém os dados dos utilizadores da aplicação e define a respetiva função no sistema.

* `Email` (Key): identifica o utilizador no sistema.
* `Nome` (Name): indica o nome completo do utilizador.
* `Perfil` (Enum - 'Admin', 'Caixa', 'Operador'): define o tipo de utilizador e as respetivas responsabilidades.

Os perfis previstos são:

* **Admin:** administração da aplicação, utilizadores e configurações gerais.
* **Caixa:** realização e acompanhamento das operações de venda.
* **Operador:** apoio à gestão de produtos e atualizações de stock.

### Tabela: `Produto`

Esta tabela reúne o catálogo principal dos artigos vendidos, incluindo os seus dados comerciais e visuais.

* `ID_Produto` (Key): identifica de forma única cada produto do catálogo.
* `Nome_Produto` (Text): apresenta o nome comercial do produto.
* `Categoria` (Ref): associa o produto à categoria correspondente.
* `Preco` (Price): indica o preço de venda unitário do produto.
* `Foto` (Image): guarda a imagem utilizada para representar visualmente o produto.
* `Descricao` (LongText): fornece informações adicionais sobre o produto.

### Tabela: `Categorias`

Esta tabela contém a lista das categorias dos produtos.

* `Nome_Categoria` (Text): identifica o nome da categoria utilizada para organizar os produtos.


### Tabela: `Estante`

Esta tabela controla o stock disponível de cada produto e mantém o registo das quantidades e atualizações.

* `ID_Estante` (Key): identifica de forma única cada registo de stock da estante.
* `Nome_Produto` (Text): indica o produto associado ao registo de stock.
* `Categoria` (Ref): associa o produto em stock à respetiva categoria.
* `Stock_Inicial` (Number): representa a quantidade inicial registada para o produto.
* `Quantidade_Stock` (Number): apresenta a quantidade atualmente disponível na estante.
* `Preco_Unitario` (Price): indica o preço unitário utilizado no controlo de stock.
* `Ultimo_Registo` (DateTime): guarda a data e hora da última atualização do stock.

### Tabela: `Itens_Venda`

Esta tabela relaciona cada venda aos produtos comprados e guarda a quantidade e o valor de cada item.

* `ID_Item` (Key): identifica de forma única cada linha de produto numa venda.
* `Venda` (Ref): associa o item à venda à qual pertence.
* `Produto` (Ref): identifica o produto incluído na venda.
* `Quantidade` (Number): indica quantas unidades do produto foram vendidas.
* `IVA` (Price): apresenta o valor do IVA aplicado ao item.
* `Subtotal` (Price): calcula o valor total do item com base na quantidade e no preço.

### Tabela: `Vendas`

Esta tabela regista as transações realizadas, incluindo a data, o estado do pagamento e os respetivos valores.

* `ID_Venda` (Key): identifica de forma única cada venda registada.
* `Data_hora` (DateTime): guarda a data e hora em que a venda foi criada ou registada.
* `Caixa` (Ref): associa a venda ao utilizador responsável pela operação.
* `Estado` (Enum - 'Aberta', 'Finalizada'): indica se a venda está em curso ou já foi concluída.
* `Valor_Entregue` (Price): registra o montante entregue pelo cliente no pagamento.
* `Valor_Total` (Price): apresenta o valor total calculado para a venda.

### Tabela: `Contabilidade_Diaria`

Esta tabela apresenta o resumo diário das vendas e permite acompanhar o desempenho e o volume de operações da loja.

* `ID_Fecho` (Key): identifica de forma única cada fecho diário da contabilidade.
* `Data` (DateTime): indica o dia correspondente ao resumo contabilístico.
* `Total_Vendas_Dia` (Price): apresenta o montante total das vendas realizadas no dia.
* `Total_Itens_Vendidos` (Number): indica o número total de itens vendidos no dia.
* `Total_Transacoes` (Number): apresenta a quantidade de vendas realizadas no dia.
* `Observacoes` (LongText): permite guardar notas adicionais sobre o fecho ou ocorrências do dia.

### Relações principais

- `Categorias` (1) relaciona-se com vários registos de `Produto` e `Estante` através dos campos `Categoria`.
- `Utilizador` (1) pode estar associado a várias vendas através do campo `Vendas.Caixa`, identificando o utilizador responsável pela operação.
- `Produto` (1) pode estar associado a vários registos de `Estante`, permitindo a gestão individual do seu stock.
- `Vendas` (1) contém vários registos de `Itens_Venda` através de `Itens_Venda.Venda`.
- `Estante` (1) pode aparecer em vários registos de `Itens_Venda` através de `Itens_Venda.Produto`, associando cada linha vendida ao produto em stock.
- `Contabilidade_Diaria` consolida os dados de `Vendas` e `Itens_Venda` por data, apresentando os totais das vendas, itens vendidos e transações.

Os 50 artigos iniciais de teste foram baseados no contexto de uma pequena loja de produtos essenciais em Cabo Verde.

## 📱 Estrutura da Interface (UI/UX)

A aplicação foi organizada em 3 vistas centrais no menu inferior para maximizar a produtividade:

1. **📦 Estante (Deck View):** Vista principal com pesquisa, agrupamento por categoria, indicadores visuais de stock baixo e botões de ação rápida.
2. **💳 Nova Venda (Form View):** Formulário para registar uma nova venda, com seleção de produtos e quantidades.
3. **🛒 Detalhes das Vendas (Table View):** Vista organizada em formato de tabela com todas as informações referentes às vendas.

No menu lateral foram organizadas as vistas secundárias:

1. **👤 Utilizadores (Table View):** Vista organizada por utilizador, com o email, nome e perfil de acesso (Admin, Caixa ou Operador).
2. **📦 Catálogo (Gallery View):** Vista de galeria para consultar visualmente os produtos do inventário e suas descrições.
3. **💵 Contabilidade (Table View):** Vista organizada por data, referente ao fecho da contabilidade diária.

## 👥 Equipa de Desenvolvimento

O projeto foi concebido e executado por uma equipa dedicada de 2 elementos:

| Membro | Função | Foco Técnico |
| :--- | :--- | :--- |
| **Lorette Araújo** | **Desenvolvedora de App e Dados** | • Modelação da base de dados no Google Sheets.<br>• Configuração de tabelas, relações e colunas virtuais no AppSheet.<br>• Implementação de fórmulas de validação, somatórios e cálculos.<br>• Configuração dos *Bots* de automação para geração de PDF.<br>• Produção do vídeo demonstrativo da aplicação. |
| **Aida Rodrigues** | **Designer e Documentadora Técnica** | • Criação da identidade visual completa e logótipo da marca **Stok Prontu**.<br>• Concepção e estilização do modelo de recibo no Google Docs.<br>• Elaboração de especificações técnicas, manuais e documentação do projeto. |

## 🛠️ Estágio de Implementação

### ✅ Já implementado

- [x] Base de dados estruturada no Google Sheets.
- [x] Estrutura de utilizadores com email, nome e perfis Admin, Caixa e Operador.
- [x] Gestão de produtos, categorias e quantidade em stock.
- [x] Atualização automática do stock com base nas entradas e vendas.
- [x] Alertas visuais e automáticos para produtos com stock crítico.
- [x] Interface organizada nas vistas de Estante, Nova Venda e Vendas.
- [x] Registo de vendas, cálculo de subtotais, totais e trocos.
- [x] Validação para impedir vendas superiores ao stock disponível.
- [x] Geração automática de recibos profissionais em PDF.
- [x] Organização dos documentos e dados no Google Drive.
- [x] Sincronização offline e acesso multiplataforma através do AppSheet.
- [x] Visualização da contabilidade diária.
- [x] Documentação técnica, manual do utilizador, identidade visual e vídeo demonstrativo.

### 🔄 Por implementar ou concluir

- [ ] Implementar um ecrã de login para autenticação dos utilizadores.
- [ ] Desenvolver um módulo de gestão de reposição de produtos, incluindo pedidos e registo de novas entradas.
- [ ] Realizar testes piloto com utilizadores em contexto comercial real.
- [ ] Recolher feedback dos utilizadores sobre a usabilidade e o desempenho da aplicação.
- [ ] Ajustar validações, formatos e mensagens com base nos resultados dos testes.
- [ ] Expandir o conjunto de testes com mais categorias e cenários de vendas.
- [ ] Criar rotinas de backup e recuperação da base de dados no Google Sheets.
- [ ] Publicar a aplicação para um conjunto limitado de utilizadores finais.
- [ ] Definir responsabilidades, periodicidade de manutenção e procedimentos de suporte.

> Nesta fase, a solução já demonstra os resultados essenciais esperados — controlo de stock, registo de vendas, cálculo automático de valores e emissão de recibos — e encontra-se preparada para validação prática. Os próximos planos consistem em implementar o ecrã de login e o módulo de reposição de produtos, testar a aplicação com utilizadores reais, recolher feedback, corrigir eventuais falhas e evoluir a plataforma para uma utilização mais ampla e sustentável.

## 📁 Estrutura do Repositório

```text
├── docs/
|   ├── relatorio_final.pdf # Relatório dos resultados esperados e metodologia
|   ├── apresentação.pdf # Documentação visual do pitch
│   ├── Stok_Prontu_Especificacao_Tecnica.pdf
│   │                             # Especificação técnica, fórmulas e colunas virtuais
│   ├── Stok_Prontu_Engenharia_de_Requisitos.pdf
│   │                             # Levantamento e definição das funcionalidades
│   ├── Stok_Prontu_Desenho_do_Sistema.pdf
│   │                             # Arquitetura, fluxos e documentação visual do sistema
│   └── Stok_Prontu_Fontes_Diagramas/
│       ├── README.txt            # Explicação das fontes dos diagramas
│       ├── arquitetura.mmd       # Arquitetura e integrações do sistema
│       ├── casos_de_uso.mmd      # Atores e casos de uso
│       ├── modelo_dados.mmd      # Entidades e relações do modelo de dados
│       ├── interacoes_venda.mmd  # Fluxo da venda e emissão do recibo
│       └── interacoes_offline.mmd # Fluxo offline e sincronização dos dados
├── templates/
│   └── Template_recibo.pdf         # Modelo de recibo utilizado pela aplicação
├── media/
│   ├── Launch_image.jfif           # Imagem de abertura da aplicação
│   ├── Logo.png                    # Recurso gráfico oficial da marca
│   └── Produto_Images/             # Imagens dos produtos do inventário
│       └── ART-001..ART-050.      # Imagens associadas aos artigos cadastrados
└── README.md                       # Documentação principal do repositório
```

---

## ⚙️ Como Configurar e Implementar o Projeto

### 1. Preparar o Google Sheets
1. Crie uma nova folha de cálculo no Google Drive com as abas `Utilizador`, `Produto`, `Estante`, `Categorias`, `Itens_Venda`, `Vendas` e `Contabilidade_Diaria`.
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

### 4. Ativar a Sincronização Offline
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
