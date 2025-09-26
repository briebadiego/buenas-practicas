# 🚀 Instrucciones para Actualizar la Página Web

## 📋 Pasos para subir cambios a GitHub Pages

### 1. **Hacer cambios en el código**
- Edita los archivos que necesites
- Guarda los cambios

### 2. **Generar el build (archivos de producción)**
```bash
npm run build
```

### 3. **Agregar cambios al git**
```bash
git add .
```

### 4. **Hacer commit con mensaje descriptivo**
```bash
git commit -m "Descripción de los cambios realizados"
```

### 5. **Subir cambios a GitHub**
```bash
git push origin master
```

### 6. **Esperar y verificar**
- Espera 5-10 minutos para que GitHub Pages actualice
- Refresca la página con `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac)
- Verifica en: https://buenaspracticasdecaa.cl

## ⚠️ Importante

- **SIEMPRE** ejecuta `npm run build` antes de hacer push
- Los archivos de build se generan en la carpeta `docs/`
- GitHub Pages debe estar configurado para usar la carpeta `/docs`

## 🔧 Configuración de GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: master
5. Folder: `/docs`
6. Save

## 🆘 Si algo no funciona

1. Verifica que el build se ejecutó sin errores
2. Revisa que la carpeta `docs/` tenga archivos
3. Verifica la configuración de Pages en GitHub
4. Espera más tiempo (hasta 30 minutos)
5. Limpia la caché del navegador

## 📞 Contacto

- WhatsApp: +56 9 9820 5981
- Email: buenaspracticasdecaa@gmail.com
