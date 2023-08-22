package com.fornula.member;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.fornula.domain.member.dto.Member;
import com.fornula.domain.member.join.MemberDTO;
import com.fornula.domain.member.join.MemberJoinMapper;

import org.junit.Test;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class MemberJoinTest {

	@Autowired
	private MemberJoinMapper memberJoinMapper;
	
	@Test
	public void memberJoin() {
		MemberDTO memberDTO = new MemberDTO();
		
		memberDTO.setCategorthree("1");
		memberDTO.setCategoryone("2");
		memberDTO.setCategorytwo("3");
		memberDTO.setEmail("1");
		memberDTO.setId("1");
		memberDTO.setLoginDate("sysdate");
		memberDTO.setMemberDate("sysdate");
		memberDTO.setMemberIdx(0);
		memberDTO.setMemberStatus(0);
		memberDTO.setPassword("1");
		
		
		memberJoinMapper.memberJoin(memberDTO);
	}
}
