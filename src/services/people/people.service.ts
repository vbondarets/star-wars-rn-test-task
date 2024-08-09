import { ICharacter } from '../../types/character.type'
import { EnhancedWithAuthHttpService } from '../api/http-auth.service'
import { HttpFactoryService } from '../api/http-factory.service'

class ActivityService {
  constructor(private readonly httpService: EnhancedWithAuthHttpService) {
    this.httpService = httpService
  }

  private readonly module = 'people'

  public async getAllPeoples(page: number): Promise<ICharacter[]> {
    return this.httpService.get(`${this.module}`, {
      params: {
        page,
      },
    })
  }
}

export const activityService = new ActivityService(
  new HttpFactoryService().createAuthHttpService(),
)
