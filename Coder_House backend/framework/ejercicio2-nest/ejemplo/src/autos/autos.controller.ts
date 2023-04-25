import { Controller } from '@nestjs/common';
import { CreateAutoDto } from 'src/dto/createAuto.dto';
import { AutosService } from './autos.service';
import {Auto} from 'src/interfaces/auto.interface';
@Controller('autos')
export class AutosController {
    constructor(private readonly autosService: AutosService){}
    
    @Post()
    async create(@Body() createAutoDto: CreateAutoDto){
        this.autosService.create(createAutoDto)
    }

    @Get()
    async findAll(): Promise<Auto[]>{
        return this.autosService.findAll()
    }
}
