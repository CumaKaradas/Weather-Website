# Hava Durumu Uygulaması / Weather Application

## Türkçe

Bu proje, kullanıcıların belirli bir şehir için veya kendi konumları için hava durumu bilgilerini görüntüleyebilecekleri bir web uygulamasıdır.

### Özellikler

- Şehir adına göre hava durumu sorgulama
- Kullanıcının mevcut konumuna göre hava durumu sorgulama
- Güncel hava durumu bilgilerini gösterme (sıcaklık, açıklama, hava durumu ikonu)
- 4 günlük hava durumu tahmini (bugün dahil)
- Sıcaklık birimini Celsius olarak gösterme
- Responsive tasarım

### Kurulum

1. Proje dosyalarını bilgisayarınıza indirin.
2. `index.html` dosyasını bir web tarayıcısında açın.

### Kullanım

- Şehir adını girerek "Get Weather" butonuna tıklayın veya
- "Get Weather for My Location" butonuna tıklayarak mevcut konumunuz için hava durumunu görüntüleyin.
- Uygulama, güncel hava durumunu ve 4 günlük tahmini gösterecektir.

### Dosyalar

- `index.html`: Uygulamanın HTML yapısı
- `script.js`: Uygulamanın JavaScript kodu
- `styles.css`: Uygulamanın stil dosyası

### API Kullanımı

Bu uygulama, hava durumu verilerini almak için OpenWeatherMap API'sini kullanmaktadır. Kendi API anahtarınızı kullanmak için `script.js` dosyasındaki `apiKey` değişkenini güncelleyin.

---

## English

This project is a web application that allows users to view weather information for a specific city or their current location.

### Features

- Weather query by city name
- Weather query based on user's current location
- Display current weather information (temperature, description, weather icon)
- 4-day weather forecast (including today)
- Temperature displayed in Celsius
- Responsive design

### Installation

1. Download the project files to your computer.
2. Open the `index.html` file in a web browser.

### Usage

- Enter a city name and click the "Get Weather" button, or
- Click the "Get Weather for My Location" button to view the weather for your current location.
- The application will display the current weather and a 4-day forecast.

### Files

- `index.html`: HTML structure of the application
- `script.js`: JavaScript code of the application
- `styles.css`: Stylesheet for the application

### API Usage

This application uses the OpenWeatherMap API to fetch weather data. To use your own API key, update the `apiKey` variable in the `script.js` file.
