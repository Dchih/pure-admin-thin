export interface TagList {
  tagName: string;
  tagId: number;
}

export interface PersonCardProps {
  // 姓名
  personName: string;
  // 人员编号
  personNumber: string;
  // 搬离时间
  movedOutTime: string;
  // 出现时间
  appearTime: string;
  // 出现地点
  appearAddress: string;
  // 住址
  address: string;
  // 档案标签
  tagList: TagList[];
}
