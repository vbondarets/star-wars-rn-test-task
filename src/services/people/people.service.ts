import { ICharacter } from 'types/character.type'
import { EnhancedWithAuthHttpService } from '../api/http-auth.service'
import { HttpFactoryService } from '../api/http-factory.service'
import { getAllPeopleRes } from './people.api.types'

class PeopleService {
  constructor(private readonly httpService: EnhancedWithAuthHttpService) {
    this.httpService = httpService
  }

  private readonly module = 'people'

  public async getAllPeople(page?: number): Promise<getAllPeopleRes> {
    return this.httpService.get(`${this.module}`, {
      params: {
        page,
      },
    })
  }
  public async getCharacterById(id: number): Promise<ICharacter> {
    return this.httpService.get(`${this.module}/${id}`)
  }
}

export const peopleService = new PeopleService(
  new HttpFactoryService().createAuthHttpService(),
)
