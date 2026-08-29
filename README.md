# AgriWatch

Frontend React + Vite per il monitoraggio intelligente delle colture.

## Funzionalita'

AgriWatch offre una panoramica operativa dei terreni agricoli e aiuta a individuare rapidamente variazioni nella vegetazione, stress idrico e condizioni di rischio.

- **Home pubblica**: presenta il servizio, le funzionalita' principali e il flusso di monitoraggio, con accesso alla Dashboard e mappa dei campi in evidenza.
- **Mappa interattiva dei campi**: mostra i terreni su mappa, consente di selezionare un campo e visualizza coltura, stato, NDVI, NDMI e livello di rischio tramite popup, legenda e controlli mappa.
- **Dashboard**: raccoglie KPI sui campi monitorati, stato della vegetazione, stress idrico, NDVI medio, ultimi aggiornamenti, statistiche della mappa, grafico NDVI e riepilogo meteo.
- **Meteo**: visualizza temperatura attuale, umidita', probabilita' di precipitazioni, andamento della temperatura, precipitazioni e previsioni.
- **Monitoraggio**: presenta una tabella dei campi con coltura, superficie, ultima analisi, NDVI, NDMI, stato e rischio. Include ricerca per nome e filtri per stato: tutti, buono, attenzione e critico.
- **Vegetazione**: confronta l'andamento di NDVI e NDMI nel tempo e mostra lo storico delle analisi con campo, data, indicatori e stato.
- **Rischio**: sintetizza il rischio complessivo e i principali fattori di rischio, con indicatori, grafico del trend e lista dei campi da attenzionare.
- **Navigazione e layout responsive**: include sidebar, barra superiore, pagine separate per ciascuna area e supporto al tema scuro tramite contesto condiviso.
- **Accesso simulato**: i moduli di login e registrazione nella Home sono mock e non salvano dati.

I dati utilizzati dall'applicazione sono locali e simulati, organizzati nella cartella `src/data/`.

## Avvio

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```