# 💻 Front-end - Predição de Risco de Doença Cardíaca (React + Bootstrap)

Este é o front-end para a API de predição de risco cardíaco. A aplicação foi desenvolvida em **React** com interface limpa e responsiva utilizando **Bootstrap**. Permite ao usuário preencher os dados clínicos do paciente e receber a predição da rede neural treinada.

## 🚀 Tecnologias utilizadas

- React 18+
- Bootstrap 5
- Axios

## 📦 Instalação e execução

### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/frontend-predicao-cardio.git
cd frontend-predicao-cardio
```

### 2. Instale as dependências:
```bash
npm install
```

### 3. Inicie o projeto:
```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🌐 Comunicação com a API
O front-end faz requisições `POST` para a API Flask rodando localmente em `http://localhost:5000/predict`.

### Exemplo de JSON enviado:
```json
{
  "Age": 48,
  "Sex": "F",
  "ChestPainType": "ASY",
  "RestingBP": 138,
  "Cholesterol": 214,
  "FastingBS": 0,
  "RestingECG": "Normal",
  "MaxHR": 108,
  "ExerciseAngina": "Y",
  "Oldpeak": 1.5,
  "ST_Slope": "Flat"
}
```

### Exemplo de resposta:
```json
{
  "resultado": "Risco de falha cardíaca",
  "probabilidade": 0.8531
}
```

## 🧾 Funcionalidades
- Formulário completo com todos os campos clínicos exigidos
- Validação dos dados de entrada (intervalos permitidos)
- Requisições automáticas para a API com exibição do resultado

## 📁 Estrutura de arquivos
- `src/App.js` → Componente principal
- `src/HeartDiseaseForm.js` → Formulário e lógica de envio

## 🧪 Observações
- Certifique-se de que a API Flask esteja rodando em `http://localhost:5000`
- Caso use portas diferentes, edite a URL no `axios.post()`

## 🔗 Repositório da API
Confira também o repositório da API Flask: [https://github.com/paulomcfm/heart-failure-api]

## 📄 Licença
Este projeto é de uso educacional/livre. Fique à vontade para adaptar.

