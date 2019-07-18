import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../dist/auth/user.repository';
import { JwtPayload } from './jwt-payload.interface';
import { User } from '../../dist/auth/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'TopSecret51',
    });
  }

  public async validate(payload: JwtPayload): Promise<User> {
    const user = await this.userRepository.findOne({username: payload.username});

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
