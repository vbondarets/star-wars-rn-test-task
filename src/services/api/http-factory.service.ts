import { EnhancedWithAuthHttpService } from './http-auth.service'
import { HttpService } from './http.service'
import { mainAxios } from './mainAxios'
import { IHttpClient } from './types'

export class HttpFactoryService {
  public createHttpService(): HttpService {
    return new HttpService(mainAxios as IHttpClient)
  }

  public createAuthHttpService(): EnhancedWithAuthHttpService {
    return new EnhancedWithAuthHttpService(this.createHttpService())
  }
}
