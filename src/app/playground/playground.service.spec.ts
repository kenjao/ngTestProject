import { TestBed, inject } from '@angular/core/testing';

import { PlaygroundService } from './playground.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlaygroundService', () => {

     let playgroundService: PlaygroundService;
     let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      providers: [PlaygroundService]
    });

    playgroundService = TestBed.get(PlaygroundService);
    httpMock = TestBed.get(HttpTestingController);
  });

  

  it('should be created', inject([PlaygroundService], (service: PlaygroundService) => {
    expect(service).toBeTruthy();
  }));

  it('should have add function', inject([PlaygroundService], (service: PlaygroundService) => {
      expect(service.add).toBeTruthy();
  }));

  it('should be created when injected', () => {
    expect(playgroundService).toBeTruthy();
  });

  it('should have add function Injected', () => {
      expect(playgroundService.add).toBeTruthy();
  });

  it("Should add correctly", inject([PlaygroundService], (service: PlaygroundService) => {
      expect(service.add(1,2)).toEqual(3);
  }));

  it("Should add correctly again", inject([PlaygroundService], (service: PlaygroundService) => {
    expect(service.add(1,2)).not.toEqual(4);
  }));

  it("Should have a service call function", inject([PlaygroundService], (service: PlaygroundService) => {
      expect(service.makeServiceCall).toBeTruthy();
  }) );

  it("should make an API call to fetch post", () => {
      const dummyResponse = [
          {id: 1, title: "Angular Test Post"},
          {id:2, title: "Second Test Post"}
        ];

        playgroundService.callPosts().subscribe( posts => {
            expect(posts.length).toEqual(2);
            expect(posts).toEqual(dummyResponse);
        }); 

        const serviceCall = httpMock.expectOne(playgroundService.postsURL);

        expect(serviceCall.request.method).toBe('GET');

        serviceCall.flush(dummyResponse);
        //httpMock.verify();

  });







  afterEach(  () => {
      httpMock.verify();
  });
  
});
