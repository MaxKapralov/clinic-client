import { Entity } from '../../model/entity';
import { EntityService } from '../../service/entity.service';


export abstract class EntitiesComponent<T extends Entity> {

  constructor(private entityService: EntityService<T>) { }

  saveEntity(entity: T) {
    if (entity.id) {
      this.entityService.update(entity).subscribe();
    } else {
      this.entityService.add(entity).subscribe();
    }
  }

}
