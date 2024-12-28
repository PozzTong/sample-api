import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ) {}

  create(createSaleDto: CreateSaleDto) {
    // return 'This action adds a new sale';
    return this.saleRepository.save(createSaleDto);
  }

  async findAll() {
    const [data, totalRecord] = await this.saleRepository.findAndCount({
      take: 10,
      skip: 0,
      order: { lastName: 'DESC' },
      where: {
        isActive: false,
      },
    });
    return { data, total: totalRecord };
    return `This action returns all sale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
