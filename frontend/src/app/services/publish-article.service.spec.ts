import { TestBed } from '@angular/core/testing';

import { PublishArticleService } from './publish-article.service';

describe('PublishArticleService', () => {
  let service: PublishArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
