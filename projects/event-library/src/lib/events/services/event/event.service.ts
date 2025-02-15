import { Injectable } from '@angular/core';
import { DataService } from '../data-request/data-request.service';
import { UserConfigService } from '../userConfig/user-config.service';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  isEnroll: boolean = false;
  items: any;
  constructor(
    private userConfigService: UserConfigService,
    private dataService: DataService) {
  }

  /**
   * To user enrolled event list
   */
  getEnrollEvents() {

    const req = {
      url: this.userConfigService.getConfigUrl().enrollListApi
    };

    return this.dataService.get(req);
  }

  /**
   * For Enroll/Unenroll to the event
   */
  enrollToEventPost(cId, uId) {
    const requestBody = {
      request: {
        "courseId": cId,
        "userId": uId,
        "fixedBatchId": "event_batch_id"
      }
    };

    const req = {
      url: this.userConfigService.getConfigUrl().enrollApi,
      data: requestBody

    };

    return this.dataService.post(req).subscribe((data) => {
      console.log("Result = ", data);
    });
  }

}


