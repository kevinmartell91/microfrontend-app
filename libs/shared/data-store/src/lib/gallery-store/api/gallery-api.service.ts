import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class GalleryApiService {
  constructor(private http: HttpClient) {}

  gatCatList() {
    const limit = 20;
    const url = `https://www.reddit.com/r/catswithjobs/.json?limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        const cats: any = [];
        response.data.children.forEach((child: any) => {
          const title = child.data.title;
          const id = child.data.id;
          const url = child.data.preview?.images[0]?.resolutions[2]?.url;
          if (url) {
            cats.push({
              id,
              title,
              url: url.replaceAll('&amp;', '&'),
            });
          }
        });
        return cats;
      })
    );
  }
}
