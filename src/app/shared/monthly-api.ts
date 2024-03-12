export interface MonthlyApiData {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    forecast: {
        forecastday: [{
            date: string;   
            date_epoch: number;
            day: {
                maxtemp_c: number;
                maxtemp_f: number;
                mintemp_c: number;
                mintemp_f: number;
                avgtemp_c: number;
                avgtemp_f: number;
                maxwind_kph: number;
                totalprecip_mm: number;
                avgvis_km: number;
                avghumidity: number;
                condition: {
                    text: string;
                    icon: string;
                    code: number;
                };
                uv: number;
            };

        }];
    };
}


