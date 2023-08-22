package com.fornula.domain.member.join;

import lombok.Data;

@Data
public class MemberDTO {

	private int memberIdx;
	private String id;
	private String password;
	private String email;
	private String memberDate;
	private int memberStatus;
	private String loginDate;
	private String categoryone;
	private String categorytwo;
	private String categorthree;
}
