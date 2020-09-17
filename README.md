# Backend API for a personal Emby Data Check Tool

This project contains the backend API for checking the data stored in a personal Emby Server. Please visit the website [emby.media](https://emby.media/) for reading more details about Emby Server.

## Motivation

I am using Emby Server running as application on NAS servers, where also my media files are stored. The Emby Server allows to distribute the media to various devices within the LAN, for example mobile devices or Kodi installations. I see the main advantage in the centralized meta data maintenance.

But a few use cases don't yet work for me that perfect. Let's take the detection of meta data for German tv shows containing special characters like 'ä', 'ö' or 'ü' (the German 'Umlaute'), for example. The scraping feature of Emby Server sometimes determines completely wrong meta data records. With this API, I will be able to check quickly the meta data settings against a snapshot of well-configured meta data. In other scenarios, I'd like to compare tags stored for individual media items or watched states against a corresponding snapshot. I also tested [trakt.tv](https://trakt.tv/) for remembering the watched states of my media files, but that is not working for me that consistently.

It might be wrong to implement that on my own, because there might be already tons of other implementation projects covering the same topic. I see there also a learning possibility to develop in the area of the "cool new stuff" using 'modern' technologies like node.js, typescript and (in parallel repositories) also Angular UI and so on.

This REST-based API is consumed in the following repositories creating an Angular UI on top of the API:

- [Emby Data Check Angular UI using Bootstrap](https://github.com/jfandy1982/emby-data-check-ui-angular-bootstrap)
- [Emby Data Check Angular UI using Angular Material Design](https://github.com/jfandy1982/emby-data-check-ui-angular-material)

## Installation

- To be defined

## Usage

- To be defined

## License

Check-out the license in the file [LICENSE.md](LICENSE.md) within this repository.

## Contributing

Thanks for taking the time to read this file until the end. As in every project, there need to be at least some kind of guideline, how to collaborate and contribute. Please check out the [CONTRIBUTING.md](https://github.com/jfandy1982/.github/blob/main/CONTRIBUTING.md) to get more details about possibilities to contribute.
