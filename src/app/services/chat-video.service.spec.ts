import { TestBed } from '@angular/core/testing';

import { ChatVideoService } from './chat-video.service';

describe('ChatVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatVideoService = TestBed.get(ChatVideoService);
    expect(service).toBeTruthy();
  });
});
