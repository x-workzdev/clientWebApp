import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { Request } from 'express';
//import { REQUEST } from '@nguniversal/express-engine/tokens'
import { DeviceDetectorService } from 'ngx-device-detector';
import {isPlatformServer} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UniversalDeviceDetectorService extends DeviceDetectorService{

  constructor(@Inject(PLATFORM_ID) platformId: any, @Optional() @Inject(Request) request: Request) {
    super(platformId);
    if (isPlatformServer(platformId)){
      super.setDeviceInfo((request.headers['user-agent'] as string) || '');
    }
  }
}
