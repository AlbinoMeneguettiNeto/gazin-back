type GenderType = 'M' | 'F';

export default interface IDevelopers {
  id?: number;
  name: string;
  age: number;
  hobby: string;
  gender: GenderType;
  birthday: Date;
  created_at?: Date;
  updated_at?: Date;
}