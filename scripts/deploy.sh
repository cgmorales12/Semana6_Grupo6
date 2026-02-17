#!/bin/bash

# Desplegar la aplicación
echo "Iniciando el despliegue..."

# Paso 1: Instalar dependencias
echo "Instalando dependencias..."
npm install

# Paso 2: Construir la aplicación (si aplica, como para proyectos con compilación)
echo "Construyendo la aplicación..."
npm run build

# Paso 3: Iniciar la aplicación
echo "Iniciando la aplicación..."
npm start

echo "Despliegue completado."
