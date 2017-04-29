import { TestBed, inject } from '@angular/core/testing';

import { SongsPlaylistsService } from './songs-playlists.service';

describe('SongsPlaylistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongsPlaylistsService]
    });
  });

  it('should ...', inject([SongsPlaylistsService], (service: SongsPlaylistsService) => {
    expect(service).toBeTruthy();
  }));
});
