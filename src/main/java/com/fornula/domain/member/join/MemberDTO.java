package com.fornula.domain.member.join;

import lombok.Data;

@Data
public class MemberDTO {

	private int member_Idx;
	private String id;
	private String password;
	private String email;
	private String member_Date;
	private int member_Status;
	private String memberfile_name;
	private String login_Date;
	private int category_one;
	private int category_two;
	private int category_three;
}
