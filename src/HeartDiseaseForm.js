import React, { useState } from "react";
import axios from "axios";

export default function HeartDiseaseForm() {
    const [form, setForm] = useState({
        Age: "",
        Sex: "F",
        ChestPainType: "ASY",
        RestingBP: "",
        Cholesterol: "",
        FastingBS: "0",
        RestingECG: "Normal",
        MaxHR: "",
        ExerciseAngina: "N",
        Oldpeak: "",
        ST_Slope: "Up",
    });

    const [resultado, setResultado] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(form);
            const response = await axios.post("http://127.0.0.1:5000/predict", {
                Age: parseInt(form.Age),
                Sex: form.Sex,
                ChestPainType: form.ChestPainType,
                RestingBP: parseInt(form.RestingBP),
                Cholesterol: parseInt(form.Cholesterol),
                FastingBS: parseInt(form.FastingBS),
                RestingECG: form.RestingECG,
                MaxHR: parseInt(form.MaxHR),
                ExerciseAngina: form.ExerciseAngina,
                Oldpeak: parseFloat(form.Oldpeak),
                ST_Slope: form.ST_Slope,
            });
            setResultado(response.data);
        } catch (err) {
            alert("Erro na requisição: " + err.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Análise de Risco Cardíaco</h2>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="Age" className="form-label">Idade</label>
                    <input
                        id="Age"
                        name="Age"
                        type="number"
                        placeholder="Idade"
                        min="0"
                        max="120"
                        value={form.Age}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="Sex" className="form-label">Sexo</label>
                    <select
                        id="Sex"
                        name="Sex"
                        value={form.Sex}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="ChestPainType" className="form-label">Tipo de Dor no Peito</label>
                    <select
                        id="ChestPainType"
                        name="ChestPainType"
                        value={form.ChestPainType}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="ASY">Assintomático</option>
                        <option value="TA">Angina Típica</option>
                        <option value="ATA">Angina Atípica</option>
                        <option value="NAP">Dor Não Anginosa</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="RestingBP" className="form-label">Pressão Arterial (Repouso)</label>
                    <input
                        id="RestingBP"
                        name="RestingBP"
                        type="number"
                        placeholder="Pressão Arterial"
                        min="0"
                        max="200"
                        value={form.RestingBP}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="Cholesterol" className="form-label">Colesterol</label>
                    <input
                        id="Cholesterol"
                        name="Cholesterol"
                        type="number"
                        placeholder="Colesterol"
                        min="0"
                        max="600"
                        value={form.Cholesterol}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="FastingBS" className="form-label">Glicemia em Jejum</label>
                    <select
                        id="FastingBS"
                        name="FastingBS"
                        value={form.FastingBS}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="0">Glicemia ≤ 120</option>
                        <option value="1">Glicemia > 120</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="RestingECG" className="form-label">ECG em Repouso</label>
                    <select
                        id="RestingECG"
                        name="RestingECG"
                        value={form.RestingECG}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="Normal">Normal</option>
                        <option value="ST">Anormalidade ST-T</option>
                        <option value="LVH">Hipertrofia Ventricular</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="MaxHR" className="form-label">Frequência Cardíaca Máxima</label>
                    <input
                        id="MaxHR"
                        name="MaxHR"
                        type="number"
                        placeholder="Frequência Cardíaca Máxima"
                        min="0"
                        max="300"
                        value={form.MaxHR}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="ExerciseAngina" className="form-label">Angina Induzida por Exercício</label>
                    <select
                        id="ExerciseAngina"
                        name="ExerciseAngina"
                        value={form.ExerciseAngina}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="N">Não</option>
                        <option value="Y">Sim</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label htmlFor="Oldpeak" className="form-label">Oldpeak (Depressão ST)</label>
                    <input
                        id="Oldpeak"
                        name="Oldpeak"
                        type="number"
                        step="0.1"
                        placeholder="Oldpeak"
                        min="-10"
                        max="10"
                        value={form.Oldpeak}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="ST_Slope" className="form-label">Inclinação do Segmento ST</label>
                    <select
                        id="ST_Slope"
                        name="ST_Slope"
                        value={form.ST_Slope}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="Up">Ascendente</option>
                        <option value="Flat">Plana</option>
                        <option value="Down">Descendente</option>
                    </select>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                </div>
            </form>

            {resultado && (
                <div className="mt-4 p-3 border rounded bg-light">
                    <h3>Resultado:</h3>
                    <p>{resultado.resultado}</p>
                    <p>Probabilidade: {resultado.probabilidade}</p>
                </div>
            )}
        </div>
    );
}